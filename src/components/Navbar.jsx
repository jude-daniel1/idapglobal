import React, { useState } from "react";
import { Link } from "react-scroll";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrollHeading, setScrollHeading] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      if (window.scrollY > 100) {
        console.log(event);
        setScrollHeading(true);
      } else {
        setScrollHeading(false);
      }
    });
  });

  return (
    <>
      <div className={open ? `flex transition-all duration-200` : `hidden`}>
        <div className="h-screen w-60 bg-white z-30 fixed right-0 md:hidden">
          <div className="w-full h-10 p-3">
            <XMarkIcon
              className="h-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="w-full flex flex-col space-y-10 mt-20 text-black items-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              delay={20}
            >
              <li
                className={active === "home" && "text-[#4285f4] font-bold"}
                onClick={() => setActive("home")}
              >
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              offset={-200}
              smooth={true}
              duration={500}
              delay={20}
            >
              <li
                className={active === "about" && "text-[#4285f4] font-bold"}
                onClick={() => setActive("about")}
              >
                About
              </li>
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              delay={20}
            >
              <li
                className={active === "services" && "text-[#4285f4] font-bold"}
                onClick={() => setActive("services")}
              >
                Services
              </li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              delay={20}
            >
              <li
                className={active === "contact" && "text-[#4285f4] font-bold"}
                onClick={() => setActive("contact")}
              >
                Contact Us
              </li>
            </Link>
            <button>Sign up</button>
          </ul>
        </div>
      </div>

      {/* ====HORIZONTAL HEADER STARTS HERE */}
      <header
        className={`w-full h-[90px] bg-white fixed z-10 ${
          scrollHeading && "shadow-md border-b border-b-blue-300"
        }`}
      >
        <div className="flex justify-between items-center px-3 max-w-6xl mx-auto  h-full bg-white z-10">
          <div>
            <h1 className="text-black font-bold text-2xl">
              <span className="">IDAP</span>Global
            </h1>
          </div>
          <div className="hidden md:flex items-center h-full">
            <ul className="flex text-black items-center space-x-3">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                delay={20}
              >
                <li
                  className={active === "home" && "text-[#4285f4] font-bold"}
                  onClick={() => setActive("home")}
                >
                  Home
                </li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                offset={-200}
                smooth={true}
                duration={500}
                delay={20}
              >
                <li
                  className={active === "about" && "text-[#4285f4] font-bold"}
                  onClick={() => setActive("about")}
                >
                  About
                </li>
              </Link>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                delay={20}
              >
                <li
                  className={
                    active === "services" && "text-[#4285f4] font-bold"
                  }
                  onClick={() => setActive("services")}
                >
                  Services
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                delay={20}
              >
                <li
                  className={active === "contact" && "text-[#4285f4] font-bold"}
                  onClick={() => setActive("contact")}
                >
                  Contact Us
                </li>
              </Link>
              <button>Sign up</button>
            </ul>
          </div>
          <div className="block md:hidden">
            <Bars3Icon
              className="h-8  cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
