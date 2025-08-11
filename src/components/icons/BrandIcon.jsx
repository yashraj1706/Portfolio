import React, { useState } from "react";
import awsIcon from "./aws-color.svg";

// Lightweight brand SVGs via Simple Icons CDN to avoid bundling large PNGs.
// Usage examples:
//   <BrandIcon name="react" />
//   <BrandIcon name="nextjs" color="ffffff" size={48} />
//   <BrandIcon name="amazonwebservices" color="FF9900" bg="transparent" />
// If a slug is unknown, this component falls back to a circular badge with initials.

const BRAND_SLUGS = {
  // Languages
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  cpp: "cplusplus",

  // Frontend
  react: "react",
  nextjs: "nextdotjs",
  tailwind: "tailwindcss",
  scss: "sass",

  // Backend
  node: "nodedotjs",
  express: "express",
  flask: "flask",
  fastapi: "fastapi",

  // Databases
  mongodb: "mongodb",
  postgresql: "postgresql",
  mysql: "mysql",
  firebase: "firebase",
  appwrite: "appwrite",

  // AI / GenAI
  openai: "openai",
  langchain: "langchain", // may not exist in Simple Icons; will fallback if not
  pinecone: "pinecone",
  huggingface: "huggingface",

  // Cloud / DevOps
  aws: "amazonaws",
  gcp: "googlecloud",
  vercel: "vercel",
  docker: "docker",
  kubernetes: "kubernetes",

  // Tools
  github: "github",
  git: "git",
  postman: "postman",
  threejs: "threedotjs",
  redux: "redux",
};

function getSlug(name) {
  if (!name) return undefined;
  const key = name.toLowerCase().replace(/\s+/g, "");
  return BRAND_SLUGS[key];
}

function AwsFallback({ size = 36, bg = "transparent", className = "", style }) {
  const s = size;
  // Render local SVG asset to ensure consistent AWS logo
  return (
    <img
      src={awsIcon}
      width={s}
      height={s}
      alt="AWS"
      title="AWS"
      loading="lazy"
      decoding="async"
      style={{
        background: bg,
        borderRadius: 12,
        display: "inline-block",
        width: s,
        height: s,
        objectFit: "contain",
        padding: 6,
        boxSizing: "border-box",
        // force white rendering for better contrast on dark bg
        filter: "grayscale(1) brightness(0) invert(1)",
        ...style,
      }}
      className={className}
    />
  );
}

export function BrandIcon({
  name,
  color = "brand", // 'brand' => brand color from Simple Icons; provide hex like 'ffffff' to force color
  size = 36,
  title,
  bg = "transparent",
  className = "",
  style,
  // If you know the exact slug, you can provide it and skip name
  slug: overrideSlug,
  pad = 6, // default padding for badge styling
}) {
  const [failed, setFailed] = useState(false);
  const slug = overrideSlug || getSlug(name);
  const colorSeg = color && color !== "brand" ? `/${color}` : "";
  const url = slug
    ? `https://cdn.simpleicons.org/${slug}${colorSeg}`
    : undefined;

  if (failed || !slug || !url) {
    if ((name || "").toLowerCase().startsWith("aws")) {
      return (
        <AwsFallback size={size} bg={bg} className={className} style={style} />
      );
    }
    // generic fallback badge
    const initials = (name || "?")
      .split(/[^A-Za-z0-9]/)
      .filter(Boolean)
      .map((s) => s[0]?.toUpperCase())
      .slice(0, 3)
      .join("");
    return (
      <div
        title={title || name}
        aria-label={title || name}
        style={{
          width: size,
          height: size,
          background: bg,
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "9999px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: Math.max(10, Math.floor(size * 0.38)),
          color: "#fff",
          padding: pad,
          boxSizing: "border-box",
          ...style,
        }}
        className={className}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={url}
      width={size - pad * 2}
      height={size - pad * 2}
      alt={title || name}
      title={title || name}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      style={{
        background: bg,
        borderRadius: "12px",
        display: "inline-block",
        width: size,
        height: size,
        objectFit: "contain",
        padding: pad,
        boxSizing: "border-box",
        ...style,
      }}
      className={className}
    />
  );
}

// Convenience named exports for frequently used brands
export const IconReact = (p) => <BrandIcon name="react" {...p} />;
export const IconNext = (p) => <BrandIcon name="nextjs" {...p} />;
export const IconNode = (p) => <BrandIcon name="node" {...p} />;
export const IconTypeScript = (p) => <BrandIcon name="typescript" {...p} />;
export const IconJavaScript = (p) => <BrandIcon name="javascript" {...p} />;
export const IconPython = (p) => <BrandIcon name="python" {...p} />;
export const IconDocker = (p) => <BrandIcon name="docker" {...p} />;
export const IconMongoDB = (p) => <BrandIcon name="mongodb" {...p} />;
export const IconFirebase = (p) => <BrandIcon name="firebase" {...p} />;
export const IconExpress = (p) => <BrandIcon name="express" {...p} />;
export const IconTailwind = (p) => <BrandIcon name="tailwind" {...p} />;
export const IconRedux = (p) => <BrandIcon name="redux" {...p} />;
export const IconOpenAI = (p) => <BrandIcon name="openai" {...p} />;
export const IconGit = (p) => <BrandIcon name="git" {...p} />;
export const IconThreeJS = (p) => <BrandIcon name="threejs" {...p} />;
export const IconAWS = (p) => <BrandIcon name="aws" {...p} />;
export const IconGCP = (p) => <BrandIcon name="gcp" {...p} />;
export const IconVercel = (p) => <BrandIcon name="vercel" {...p} />;
export const IconKubernetes = (p) => <BrandIcon name="kubernetes" {...p} />;
export const IconGitHub = (p) => <BrandIcon name="github" {...p} />;
export const IconPostman = (p) => <BrandIcon name="postman" {...p} />;
export const IconFlask = (p) => <BrandIcon name="flask" {...p} />;
export const IconFastAPI = (p) => <BrandIcon name="fastapi" {...p} />;
export const IconPostgres = (p) => <BrandIcon name="postgresql" {...p} />;
export const IconMySQL = (p) => <BrandIcon name="mysql" {...p} />;
export const IconLangChain = (p) => <BrandIcon name="langchain" {...p} />;
export const IconPinecone = (p) => <BrandIcon name="pinecone" {...p} />;
export const IconHuggingFace = (p) => <BrandIcon name="huggingface" {...p} />;
