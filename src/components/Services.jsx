import React from "react";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen items-center" name="services">
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-4xl font-extrabold p-11">Apply For</h1>
      </div>
      <div className=" p-10 md:p-0 space-y-14 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* SERVICES START HERE */}
        <Fade left>
          <div className="flex flex-col items-center justify-center relative cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <BriefcaseIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                AGENT/JOB
              </p>
              <p className="text-center font-light group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                excepturi neque corporis dolor facere dolore praesentium nobis
                culpa modi aut.
              </p>
              <div className="flex justify-center">
                <button className="w-[150px] group-hover:from-white group-hover:to-white group-hover:text-blue-600 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="flex flex-col items-center justify-center relative cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <AcademicCapIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                BUSINESS LOAN
              </p>
              <p className="text-center font-light group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                excepturi neque corporis dolor facere dolore praesentium nobis
                culpa modi aut.
              </p>
              <div className="flex justify-center">
                <button className="w-[150px] group-hover:from-white group-hover:to-white group-hover:text-blue-600 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="flex flex-col items-center justify-center relative cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <HomeModernIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                STUDENT EMPOWERMENT
              </p>
              <p className="text-center font-light group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                excepturi neque corporis dolor facere dolore praesentium nobis
                culpa modi aut.
              </p>
              <div className="flex justify-center">
                <button className="w-[150px] group-hover:from-white group-hover:to-white group-hover:text-blue-600 ">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
