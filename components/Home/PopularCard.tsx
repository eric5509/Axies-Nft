"use client";
import { motion } from "framer-motion";
import PopularText from "./PopularText";
import PopularImage from "./PopularImage";

type Props = {
  data: {
    id: number;
    name: string;
    avatar: string;
    creator: string;
    images: string[];
    likes: number;
  };
  track: number;
};

export default function PopularCard({ data, track }: Props) {
  const variants = {
    initial: {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
    },
    animate: (key: number) => ({
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        delay: key * 0.2,
        duration: 1.25,
      },
    }),
  };
  return (
    <motion.div
      className=""
      variants={variants}
      custom={track}
      viewport={{ once: true }}
      initial="initial"
      whileInView="animate"
    >
      <div className="p-4 hover:scale-105 duration-300 bg-black/20 border-2 border-purple-950 backdrop-blur-2xl shadow-md rounded-lg text-white">
        <PopularImage images={data.images} />
        <PopularText
          creator={data.creator}
          avatar={data.avatar}
          likes={data.likes}
          name={data.name}
        />
      </div>
    </motion.div>
  );
}
