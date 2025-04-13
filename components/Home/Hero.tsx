"use client";
import { motion } from "framer-motion";
import React from "react";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import DisplayCardList from "./DisplayCardList";
import Image from "next/image";

export default function Hero() {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duartion: 1,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      viewport={{ once: true }}
      whileInView="animate"
      className="min-h-screen pt-40 xl:px-10 lg:pt-28 relative bg-gradient-to-br from-purple-500 via-black/30 to-blue-900 flex flex-col justify-between py-7"
    >
      <div className="z-10 absolute h-20 w-20 bg-gradient-to-tl from-yellow-500/40 rounded-lg via-purple-600/30 to-red-600/40 backdrop-blur-3xl border-l-2 top-40 right-32"></div>
      <div className="grid absolute rounded-full h-12 text-white text-lg xl:text-2xl tracking-widest font-normal w-24 xl:w-36 bg-rose-500/20 backdrop-blur-2xl top-28 xl:top-64 xl:left-[500px] left-1/2 -translate-x-1/2 xl:translate-x-0 lg:grid place-content-center">
        NFT
      </div>
      <div className="hidden md:flex absolute rounded-full h-60  w-60 filter1 hue-rotate-180 saturate-200 md:top-96 lg:top-[450px] xl:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Image width={100} height={100} src="/logo.png" className="h-auto w-auto" alt="" />
      </div>
      <div className="hidden absolute rounded-full h-60  w-60 filter2 hue-rotate-180 saturate-200  top-20 left-0"></div>
      <div className="hidden absolute rounded-full h-60  w-60 filter3 hue-rotate-180 saturate-200  top-20 right-0"></div>
      <div className="wrapper mb-10 z-20 relative grid xl:grid-cols-2">
        <div className="">
          <HeroText />
          <HeroButtons />
        </div>
        <HeroImage />
      </div>
      <DisplayCardList />
    </motion.div>
  );
}
