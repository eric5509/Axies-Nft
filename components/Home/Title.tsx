import React from "react";

type Props = {
  title: string;
  hide?: boolean
};
export default function Title({ title, hide}: Props) {
  return (
    <div className="flex mb-7 text-white items-center wrapper justify-between">
      <p className="lg:text-3xl sm:text-2xl font-semibold text-xl">{title}</p>
      {!hide && <p className="text-xs md:text-[15px] border-b font-medium cursor-pointer hover:text-blue-600 duration-300">Explore More</p>}
    </div>
  );
}
