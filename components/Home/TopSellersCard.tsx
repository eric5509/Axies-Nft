"use client";
import { motion } from "framer-motion";
type Props = {
  user: {
    id: number;
    name: string;
    eth: number;
    avatar: string;
    background: string;
  };
  track: number;
};

export default function TopSellersCard({ user, track }: Props) {
  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (key: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: key * 0.1,
        duration: 1.25,
      },
    }),
  };
  return (
    <motion.div
      variants={variants}
      custom={track}
      viewport={{ once: true }}
      initial="initial"
      whileInView="animate"
      className="flex gap-5 items-center text-white"
    >
      <div className="h-14 w-15 rounded-lg overflow-hidden shadow-md bg-red-500">
        <img src={user.avatar} alt="" />
      </div>
      <div className="">
        <p className="text-sm font-semibold ">{user.name} </p>
        <p className="text-xs text-gray-300 mt-1 ">{user.eth} ETH</p>
      </div>
    </motion.div>
  );
}
