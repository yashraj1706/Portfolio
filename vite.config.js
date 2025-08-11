import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

function preferOptimizedImages() {
  const exts = [".png", ".jpg", ".jpeg"];
  const outAssets = path.resolve(process.cwd(), "src/assets/optimized");
  return {
    name: "prefer-optimized-images",
    enforce: "pre",
    resolveId(source, importer) {
      if (!importer) return null;
      const lower = source.toLowerCase();
      if (!exts.some((ext) => lower.endsWith(ext))) return null;
      if (lower.startsWith("http://") || lower.startsWith("https://") || source.startsWith("\0")) return null;
      const rel = source.replace(/^[.][\/\\]/, "").replace(/\\/g, "/");
      const candidate = path.join(outAssets, rel).replace(/\.(png|jpe?g)$/i, ".webp");
      if (fs.existsSync(candidate)) return candidate;
      return null;
    },
  };
}

export default defineConfig({
  plugins: [react(), preferOptimizedImages()],
  resolve: { dedupe: ["react", "react-dom"] },
  optimizeDeps: { include: ["lodash.debounce"] },
  build: { chunkSizeWarningLimit: 1200 },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import fs from "node:fs";
// import path from "node:path";

// function preferOptimizedImages() {
//   const exts = [".png", ".jpg", ".jpeg"];
//   const srcAssets = path.resolve(process.cwd(), "src/assets");
//   const outAssets = path.resolve(process.cwd(), "src/assets/optimized");
//   return {
//     name: "prefer-optimized-images",
//     enforce: "pre",
//     resolveId(source, importer) {
//       if (!importer) return null;
//       const lower = source.toLowerCase();
//       if (!exts.some((ext) => lower.endsWith(ext))) return null;
//       if (
//         lower.startsWith("http://") ||
//         lower.startsWith("https://") ||
//         source.startsWith("\0")
//       )
//         return null;
//       const abs = path.resolve(path.dirname(importer), source);
//       if (!abs.startsWith(srcAssets)) return null;
//       const rel = path.relative(srcAssets, abs);
//       const baseNoExt = rel.replace(/\.(png|jpe?g)$/i, "");
//       const candidate = path.join(outAssets, `${baseNoExt}.webp`);
//       if (fs.existsSync(candidate)) {
//         return candidate;
//       }
//       return null;
//     },
//   };
// }

// export default defineConfig({
//   plugins: [react(), preferOptimizedImages()],
//   resolve: {
//     dedupe: [
//       "react",
//       "react-dom",
//       "three",
//       "@react-three/fiber",
//       "@react-three/drei",
//     ],
//     alias: {
//       three: "three",
//     },
//   },
//   optimizeDeps: {
//     include: [
//       "three",
//       "@react-three/fiber",
//       "@react-three/drei",
//       "react",
//       "react-dom",
//       "lodash.debounce",
//     ],
//     exclude: ["@splinetool/react-spline", "@splinetool/runtime"],
//   },
//   build: {
//     chunkSizeWarningLimit: 1200,
//     rollupOptions: {
//       external: [],
//       output: {
//         manualChunks: {
//           vendor: ["react", "react-dom"],
//           three: ["three", "@react-three/fiber", "@react-three/drei"],
//           spline: ["@splinetool/react-spline", "@splinetool/runtime"],
//           framer: ["framer-motion"],
//         },
//       },
//     },
//   },
// });


