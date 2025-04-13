import React from "react";
import { BiSearch } from "react-icons/bi";
import WalletButton from "./WalletButton";

export default function WalletSearch() {
  return (
    <div className="hidden lg:flex items-center  gap-8">
      <BiSearch className="text-white   text-2xl cursor-pointer" />
      <WalletButton />
    </div>
  );
}
