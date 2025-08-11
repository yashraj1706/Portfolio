import React from "react";

// Eagerly import optimized assets as URLs (vite glob)
const optimized = import.meta.glob("/src/assets/optimized/**/*.{webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

function findOptimizedVariants(originalUrl) {
  if (!originalUrl) return {};
  const orig = String(originalUrl).replace(/\\/g, "/");
  const base = orig.replace(/^.*[\\/]/, "").replace(/\.(png|jpe?g)$/i, "");
  let avif, webp;
  for (const [key, url] of Object.entries(optimized)) {
    const kbase = key.replace(/^.*[\\/]/, "").replace(/\.(webp|avif)$/i, "");
    if (kbase === base) {
      if (key.endsWith(".avif")) avif = url;
      if (key.endsWith(".webp")) webp = url;
    }
  }
  return { avif, webp };
}

export default function SmartImage({
  src,
  alt = "",
  width,
  height,
  className = "",
  loading = "lazy",
  decoding = "async",
  sizes,
  ...rest
}) {
  const { avif, webp } = findOptimizedVariants(src);
  if (!avif && !webp) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        {...rest}
      />
    );
  }
  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} />}
      {webp && <source type="image/webp" srcSet={webp} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        {...rest}
      />
    </picture>
  );
}
