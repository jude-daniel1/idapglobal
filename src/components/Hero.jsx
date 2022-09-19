import React from "react";
import logo from "../assets/logo-min.jpg";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export const Hero = () => {
  return (
    <main
      className="flex flex-col md:flex-row px-10 md:items-center pt-[130px]  md:pt-[50px] min-h-screen select-none "
      name="home"
    >
      <Fade left>
        <div className="md:w-[50%] order-2 md:order-1">
          <h3 className="font-extrabold text-[#4285f4] text-7xl -mt-[100px] hidden md:block md:-mt-[4px] lg:-mt-[130px] md:text-6xl lg:text-7xl">
            Welcome
          </h3>
          <p className="text-2xl md:text-2xl font-bold md:font-bold mt-7">
            NPGOC & IDAP GLOBAL SERVICES LTD
          </p>

          <p className="mt-6">
            The Company with the global vission of wealth and prosperity for.
            {/* all. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Delectus a deleniti tempore deserunt autem ea quibusdam molestias in
            reprehenderit? Possimus? */}
          </p>

          <Link>
            <button className="text-xl px-12 py-3 mt-10">Get Started</button>
          </Link>
        </div>
      </Fade>
      <Fade right>
        <div className="md:w-[50%]  order-1 md:order-2 flex flex-col items-center md:flex-row md:justify-end">
          <img src={logo} alt="" className="w-[80%] object-contain" />
        </div>
      </Fade>
    </main>
  );
};
