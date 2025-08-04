import React from "react";

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
