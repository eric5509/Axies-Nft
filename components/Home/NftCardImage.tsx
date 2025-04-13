import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { PiHandbagFill } from "react-icons/pi";

type Props = {
  section: "auction" | "picks";
  likes?: number;
  image: string;
};

export default function NftCardImage({ section, image, likes }: Props) {
  const data = ["10", ":", "12", ":", "05", ":", "23"];
  return (
    <div className="h-64 sm:h-48 relative group flex cursor-pointer py-2 flex-col justify-between items-center rounded-lg overflow-hidden">
      <div className="h-full absolute top-0 z-0 left-0 w-full bg-purple-500">
        <Image
          src={image}
          width={100}
          height={100}
          className="h-full object-cover w-full"
          alt=""
        />
      </div>
      {section === "picks" && (
        <div className="flex absolute top-3 right-3 z-30 rounded-lg px-1.5 py-1.5 bg-black text-white text-sm items-center gap-2">
          <BiHeart />
          <p className="text-[10px]">{likes}</p>
        </div>
      )}
      <div className="flex px-3 py-2.5 active:scale-90 absolute top-1/2 left-1/2 -translate-x-1/2 border-2 border-blue-600 rounded-full -translate-y-10 group-hover:-translate-y-1/2 group-hover:visible invisible shadow-md bg-white group-hover:opacity-100 opacity-0 text-sm font-semibold duration-300 items-center gap-2">
        <PiHandbagFill className="text-sm text-purple-600" />
        <p className="text-xs font-semibold">Place Bid</p>
      </div>
      {section === "auction" && (
        <div className="flex absolute border border-blue-500 bottom-3 z-20 items-center gap-2 bg-black/40 backdrop-blur-md shadow-md text-white rounded-full px-3 py-3 w-fit">
          <span>🔥</span>
          <div className="flex gap-2 text-xs ">
            {data.map((el, key) => (
              <p key={key}>{el}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
