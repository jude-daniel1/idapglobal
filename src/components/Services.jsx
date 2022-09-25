import React from "react";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div
      className=" w-[100%] flex flex-col min-h-screen items-center"
      name="services"
    >
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-4xl font-extrabold p-11">Apply For</h1>
      </div>
      <div className=" p-10 md:p-0 space-y-14 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* SERVICES START HERE */}
        <Fade left>
          <div className="flex flex-col items-center justify-center  cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <BriefcaseIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                AGENT/JOB
              </p>
              <p className="text-center font-light group-hover:text-white ">
                Register with a token of ₦1500 only and we train and certify you
                in your field of interest without spending millions (only
                logistics) then we will retrain you or send you to our
                partnering bodies who need your services, and you have access to
                unlimited benefits.
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
          <div className="w-[100%]  flex flex-col items-center justify-center  cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <AcademicCapIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                BUSINESS LOAN
              </p>
              <p className="text-center font-light group-hover:text-white flex items-center">
                First register as an agent with the sum of 1500 naira only and
                get your 5 agents and 1 student to register under you with your
                code, purchase your loan form with 3000 naira, follow the
                procedure's and wait for disbursement.
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
          <div className="w-[100%] flex flex-col items-center justify-center  cursor-pointer">
            <div className="flex flex-col items-center space-y-5 shadow-xl  p-5 pt-[40px] bg-gray-200 hover:bg-blue-500 group transition-all duration-200 hover:scale-105">
              <div className="rounded-full bg-blue-600 text-white p-5 w-20 h-20 absolute -top-11 group-hover:bg-white transition-all duration-200">
                <HomeModernIcon className="h-10 group-hover:text-blue-600" />
              </div>
              <p className="text-xl group-hover:text-white text-center">
                STUDENT EMPOWERMENT
              </p>
              <p className="text-center font-light group-hover:text-white">
                Register with ₦1500 only and prepare for exam. While waiting for
                exam date and venues, pass your exam and receive financial
                empowerment.
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
