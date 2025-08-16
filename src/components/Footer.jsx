import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import linkedin from "../assets/socialsSvgs/linkedin.png";
import { github } from "../assets";
import { Link } from "react-router-dom";

const MagicButton = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses = "",
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-0 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Old purple ring kept for reference */}
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

const MagicIcon = ({ img, handleClick, otherClasses = "" }) => {
  return (
    <button
      className="relative cursor-pointer inline-flex h-12 w-12 md:w-12 overflow-clip rounded-lg p-[1px] hover:p-[2px] duration-300 focus:outline-none"
      onClick={handleClick}
    >
      {/* Old purple ring kept for reference */}
      {/* <span className="absolute text-center inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <span className="absolute text-center inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-default items-center justify-center rounded-lg bg-slate-950 px-0 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        <img src={img} alt="icon" className="w-9 h-9 object-contain" />
      </span>
    </button>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const hideTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("yashsng7@gmail.com").catch(() => {});
    setConfettiKey((k) => k + 1);
    setCopied(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer className="w-full border-t-[2.5px] border-brand-deep/40 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-center md:text-left w-full md:w-auto text-sm md:text-base font-light">
          Copyright © 2025 Yash Raj Singh
        </p>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:justify-end justify-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/yash-raj-singh-b48756256/"
              target="_blank"
              rel="noreferrer"
            >
              <MagicIcon img={linkedin} />
            </a>
            <a
              href="https://github.com/yashraj1706"
              target="_blank"
              rel="noreferrer"
            >
              <MagicIcon img={github} />
            </a>
          </div>
          <div className="relative">
            {copied && (
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  key={confettiKey}
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={200}
                  width={400}
                />
              </div>
            )}
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#0b1a1c] hover:!bg-black/70 transition-colors duration-[1000ms]"
            />
          </div>
          <Link to="/links/all" rel="">
            <MagicButton
              title="Explore My Links Hub"
              icon=""
              position="left"
              otherClasses="!bg-[#0b1a1c] hover:!bg-black/70 transition-colors duration-[1000ms]"
            />
          </Link>
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="View My Resume"
              icon=""
              position="left"
              otherClasses="!bg-[#0b1a1c] hover:!bg-black/70 transition-colors duration-[1000ms]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
