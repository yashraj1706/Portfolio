import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, logoColor, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
  }) => {
    return (
      <button
        className="relative inline-flex h-12 w-full  md:w-fit  overflow-hidden rounded-lg p-[1px] focus:outline-none"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-fit cursor-pointer items-center justify-center rounded-lg
                   bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    );
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary bg-opacity-" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 order-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoColor}
            alt="logo"
            className="w-9 h-9 object-contain rounded-md"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Yash&nbsp;
            <span className="sm:block hidden"> | YRS</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 order-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            key="Certificates"
            className={`${
              active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <Link to="/certifications">Certificates</Link>
          </li>
        </ul>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 md:mr-0 mr-10 list-none hidden sm:flex" 
        >
          <MagicButton
            title="Resume"
            icon=""
            positoion="left"
            otherClasses="!bg-[#161A31]"
          />
        </a>

        <div className="xs:hidden flex  justify-end items-center order-2">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="order-2 md:mr-0 mr-10"
              >
                <MagicButton
                  title="Resume"
                  icon=""
                  positoion="left"
                  otherClasses="!bg-[#161A31]"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
