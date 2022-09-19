import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import IconText from "./IconText";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center" name="contact">
      <div className="w-full flex justify-center item-center p-10 relative mb-10">
        <h1 className="text-3xl font-bold absolute">Contact Us</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <div className="w-full p-5 flex flex-col space-y-14">
            <Fade left>
              <IconText
                Icon={MapPinIcon}
                title={"Address"}
                text={
                  "Off Swali Road by Ereboter Filling Station Obelle Street Yenagoa, Bayelsa State "
                }
              />
            </Fade>
            <Fade left>
              <IconText
                title={"Phone"}
                Icon={PhoneIcon}
                text={"+2348118579797"}
              />
            </Fade>
            <Fade left>
              <IconText
                title={"Email"}
                Icon={EnvelopeIcon}
                text={"idapglobalservices@gmail.com"}
              />
            </Fade>
          </div>
        </div>
        <Fade right>
          <div className="md:w-[50%] flex flex-col p-6 space-y-5 ">
            <div className="flex flex-col w-full space-y-7">
              <input type="text" placeholder="Enter Email..." />
              <input type="text" placeholder="Enter Subject..." />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="w-full border border-blue-500 p-5 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button className="max-w-[150px]">Send</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
