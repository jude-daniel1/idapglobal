import React from "react";
import aboutImage from "../assets/about.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="flex flex-col space-y-5 min-h-screen">
      <div className="flex flex-col items-center justify-center mb-5 md:mb-10 mt-20 md:mt-0">
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <p className="max-w-3xl text-center mt-5 font-light p-3">
          We are the company with the biggest vision's of prosperity for all. We
          have what it takes to create jobs for all Nigerians and to make things
          easier for the common man.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row p-10 pt-5 md:p-0 items-center "
        name="about"
      >
        <Fade left>
          <div className="md:w-[50%] p-10 pl-0">
            <img src={aboutImage} alt="" className="h-[60%] object-contain" />
          </div>
        </Fade>
        <Fade right>
          <div className="md:w-[50%] p-5">
            <div className="">
              <h2 className="font-extrabold text-2xl">Our Vision</h2>
              <ul className="font-light text-base mt-3 space-y-3">
                <li>
                  To have an investment in all local government areas and states
                  of Nigeria.
                </li>
                <li>To liberate all Nigerians from poverty and joblessness.</li>
                <li>
                  To make all Nigerians to have access to education and skills
                  acquisition without spending millions of naira.
                </li>
                <li>To invest in all areas of business.</li>
                <li>
                  To become the leading company with the biggest impacts and
                  investments in Nigeria and beyond.
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="font-extrabold text-2xl">Mission Statement</h2>
              <ul className="font-light text-base mt-3 space-y-3">
                <li>
                  We will extend our investment to at least 3 local government
                  areas every year.
                </li>
                <li>
                  We will create job opportunities at the state and local
                  government levels.
                </li>
                <li>
                  We will provide business loans to as many who cares without
                  collateral and interest (only logistics).
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
