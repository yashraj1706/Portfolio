import fs from "node:fs/promises";
import fssync from "node:fs";
import path from "node:path";
import sharp from "sharp";
import fg from "fast-glob";

const SRC_DIR = path.resolve("src/assets");
const OUT_DIR = path.resolve("src/assets/optimized");
const MAX_WIDTH = 1920;

function isUiLike(file, meta) {
  const f = file.toLowerCase();
  return (
    meta.hasAlpha ||
    /icon|logo|brand|tailwind|react|node|firebase|redux|git|docker|openai|three|mysql|postgres|mongodb|sql|socket|webrtc/.test(
      f
    ) ||
    (meta.width ?? 0) <= 512 ||
    (meta.height ?? 0) <= 512
  );
}

async function mtimeOrNull(p) {
  try {
    const s = await fs.stat(p);
    return s.mtimeMs;
  } catch {
    return null;
  }
}

async function convert(file) {
  const rel = path.relative(SRC_DIR, file);
  const baseOut = path.join(OUT_DIR, rel).replace(/\.(png|jpe?g)$/i, "");
  const dirOut = path.dirname(baseOut);
  await fs.mkdir(dirOut, { recursive: true });

  const webpPath = baseOut + ".webp";
  const avifPath = baseOut + ".avif";

  const inTime = (await fs.stat(file)).mtimeMs;
  const webpTime = await mtimeOrNull(webpPath);
  const avifTime = await mtimeOrNull(avifPath);

  const img = sharp(file);
  const meta = await img.metadata();

  const uiLike = isUiLike(file, meta);
  const needsAvif = !uiLike;

  const webpFresh = webpTime && webpTime >= inTime;
  const avifFresh = !needsAvif || (avifTime && avifTime >= inTime);
  if (webpFresh && avifFresh) return "skipped";

  const maxW = Math.min(meta.width || MAX_WIDTH, MAX_WIDTH);

  if (!webpFresh) {
    const webp = img.clone().resize({ width: maxW, withoutEnlargement: true });
    await webp
      .webp(uiLike ? { lossless: true } : { quality: 78, effort: 4 })
      .toFile(webpPath);
  }

  if (needsAvif && !avifFresh) {
    const avif = img.clone().resize({ width: maxW, withoutEnlargement: true });
    await avif.avif({ quality: 45, effort: 4 }).toFile(avifPath);
  }

  return "done";
}

async function main() {
  const files = await fg([`${SRC_DIR.replace(/\\/g, "/")}/**/*.{png,jpg,jpeg}`], {
    dot: false,
    onlyFiles: true,
    ignore: [`${OUT_DIR.replace(/\\/g, "/")}/**`],
  });

  if (!files.length) {
    console.log("No PNG/JPEG files found under", SRC_DIR);
    return;
  }

  console.log(`Optimizing ${files.length} images…`);
  let done = 0,
    skipped = 0;
  for (const f of files) {
    try {
      const res = await convert(f);
      if (res === "skipped") skipped++;
      else done++;
      console.log(`${res === "skipped" ? "⏭" : "✓"} ${path.relative(process.cwd(), f)}`);
    } catch (e) {
      console.warn("× Failed:", f, e.message);
    }
  }
  console.log(`Done. Converted: ${done}, skipped (up-to-date): ${skipped}`);
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, "/")}`) {
  main();
}