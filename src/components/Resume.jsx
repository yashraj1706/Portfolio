import React from "react";
import { Link } from "react-router-dom";

// Inline MagicButton styled like the rest of the site (matches Navbar button style)
const MagicButton = ({ title, to, href, download, onClick }) => {
  const Inner = (
    <span className="inline-flex h-full text-[14px] md:text-[15px] w-fit cursor-pointer items-center justify-center rounded-lg bg-slate-950/90 px-5 md:px-7 py-2 text-white backdrop-blur-3xl gap-2">
      {title}
    </span>
  );
  const Wrapper = ({ children }) => (
    <button
      className="relative inline-flex h-10 w-fit overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
      {children}
    </button>
  );

  if (to) {
    return (
      <Wrapper>
        <Link to={to} className="contents">
          {Inner}
        </Link>
      </Wrapper>
    );
  }
  if (href) {
    return (
      <Wrapper>
        <a href={href} download={download} className="contents">
          {Inner}
        </a>
      </Wrapper>
    );
  }
  return <Wrapper>{Inner}</Wrapper>;
};

const Resume = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      background: "#121212",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    }}
  >
    {/* Controls pinned bottom-right, stacked, offset from edges */}
    <div
      className="fixed z-50 flex flex-col items-end gap-3 p-3 md:p-4"
      style={{
        right: "1rem",
        bottom: "1rem",
        paddingRight: "max(1rem, env(safe-area-inset-right, 0px))",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <MagicButton title="Download Resume" href="/resume.pdf" download />
      <MagicButton title="Links Hub" to="/links/all" />
      <MagicButton title="← Back to Portfolio" to="/" />
    </div>
    <iframe
      src="/resume.pdf"
      title="My Resume"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        background: "#333"
      }}
      allowFullScreen
    ></iframe>
  </div>
);

export default Resume;
