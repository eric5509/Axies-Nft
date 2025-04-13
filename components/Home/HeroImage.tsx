import React from "react";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className=" flex xl:justify-end pl-10 lg:pl-0 justify-center items-center">
      <motion.img
        src="/nftmain4.png"
        alt="NFT Main"
        className="hidden lg:block scale-x-[-1] mt-10 lg:h-80 xl:h-80"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <img
        src="/nftmain4.png"
        alt="NFT Main"
        className="h-54 mt-10 lg:hidden"
      />
    </div>
  );
}
