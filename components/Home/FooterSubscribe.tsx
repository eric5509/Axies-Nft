import React from "react";
import { BsSend } from "react-icons/bs";

export default function FooterSubscribe() {
  return (
    <div className="text-center lg:text-start">
      <p className="font-semibold">Subscribe Us</p>
      <div className="flex group justify-center lg:justify-start mt-3 h-12 rounded-md shadow-md overflow-hidden">
        <div className="h-full w-60 border-2 group-hover:border-blue-600 duration-300 border-r-0 rounded-l-md">
          <input
            type="text"
            placeholder="myemail@email.com"
            className="h-full bg-transparent border-none text-sm outline-none pl-3"
          />
        </div>
        <div className="h-full w-12 bg-blue-600 duration-300 active:scale-90 hover:bg-purple-600 cursor-pointer rounded-r-lg grid place-content-center">
          <BsSend className="text-white" />
        </div>
      </div>
    </div>
  );
}
