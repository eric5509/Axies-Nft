import React from "react";
import { FaWallet } from "react-icons/fa";

export default function WalletButton() {
  return (
    <div className="flex mt-auto relative justify-center group items-center gap-3 px-4 cursor-pointer active:scale-90 duration-300 py-3 text-sm overflow-hidden font-semibold border-2 border-purple-600 rounded-full shadow-md shadow-blue-500">
      <div className="h-full w-0 absolute duration-300 group-hover:w-full bg-gradient-to-tl from-blue-500 to-black top-0 right-0 "></div>
      <div className="h-full w-0 absolute duration-300 group-hover:w-full delay-200 bg-gradient-to-tl from-black to-rose-500 top-0 left-0 "></div>
      <FaWallet className="text-lg z-10 relative text-purple-500" />
      <p className="z-10 relative">Wallet Connect</p>
    </div>
  );
}
