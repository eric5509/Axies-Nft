"use client";
import { JSX } from "react";
import { motion } from "framer-motion";

type Props = {
  data: {
    icon: JSX.Element;
    title: string;
    color: string;
    description: string;
  };
  track: number;
};

export default function DisplayCard({ data, track }: Props) {
  const variants = {
    initial: {
      y: 200,
      opacity: 0,
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
    <motion.div
      variants={variants}
      custom={track}
      viewport={{ once: true }}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center text-white text-sm text-center"
    >
      <div
        className="h-12 w-12 grid text-xl place-content-center rounded-xl border-2 "
        style={{ backgroundColor: `${data.color}` }}
      >
        {data.icon}
      </div>
      <p className="font-semibold mb-3 mt-4">{data.title}</p>
      <div className=" lg:px-12 xl:px-0">
        <p className="text-xs px-5 sm:px-0 text-gray-200">{data.description}</p>
      </div>
    </motion.div>
  );
}
