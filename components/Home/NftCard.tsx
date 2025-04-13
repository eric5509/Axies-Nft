"use client";

import { motion } from "framer-motion";

import React from "react";
import NftCardImage from "./NftCardImage";
import NftTitle from "./NftTitle";
import NftPrice from "./NftPrice";

type Props = {
  data: {
    id: number;
    image: string;
    title: string;
    creator: string;
    creatorAvatar: string;
    category: "BSC" | "ETH" | "SOL"; // Enum-like restriction
    currentBid: string;
    usdPrice: string;
    likes: number;
    comingSoon?: boolean;
  };
  track: number;
  section: "auction" | "picks";
};
export default function NftCard({ data, section, track }: Props) {
  const variants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (key: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: key * 0.2,
        duration: 1.25,
        type: "spring",
        stiffness: 100,
      },
    }),
  };
  return (
    <div className="snap-start overflow-hidden">
      <motion.div
        variants={variants}
        custom={track}
        initial="initial"
        viewport={{once: true}}
        whileInView="animate"
        className=""
      >
        <div className="hover:-translate-y-3 duration-500">
          <div className=" shadow-md bg-black/30 backdrop-blur-md p-3 rounded-lg">
            <NftCardImage
              image={data.image}
              likes={data.likes}
              section={section}
            />
            <NftTitle data={data} />
            <NftPrice data={data} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
