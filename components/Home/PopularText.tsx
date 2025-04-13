import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

type Props = {
  name: string;
  creator: string;
  avatar: string;
  likes: number;
};

export default function PopularText({name, creator, likes, avatar}:Props) {
  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="flex items-center gap-2">
        <div className="h-10 border-2 w-10 rounded-lg ">
          <Image
            src={avatar}
            width={100}
            height={100}
            className="h-full w-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="">
          <p className="text-[13px] font-semibold">{name}</p>
          <div className="flex gap-3 text-xs mt-1">
            <p className="text-gray-300">Creator </p>
            <p>{creator}</p>
          </div>
        </div>
      </div>
      <div className="flex rounded-lg px-1.5 py-1.5 bg-black text-white text-sm items-center gap-2">
        <BiHeart />
        <p className="text-xs">{likes}</p>
      </div>
    </div>
  );
}
