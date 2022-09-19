import React from "react";

const IconText = ({ Icon, text, title }) => {
  return (
    <div className="flex justify-start">
      <div className="justify-start items-center p-3">
        <Icon className="text-blue-600 h-8" />
      </div>
      <div className="flex flex-col space-y-3">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

export default IconText;
