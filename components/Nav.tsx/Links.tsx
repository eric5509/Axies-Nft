import { useState } from "react";

type Props = {};

export const links = [
  "Home",
  "Explore",
  "Activity",
  "Community",
  "Pages",
  "Contact",
];
export default function Links() {
  const [active, setActive] = useState(100);
  return (
    <div className="hidden lg:flex gap-10 relative text-[15px] font-medium">
      {links.map((el, key) => (
        <div
          key={key}
          onMouseEnter={() => {
            setActive(key);
          }}
          onMouseLeave={() => {
            setActive(100);
          }}
          className={`cursor-pointer relative duration-300
            ${active === 100 && " text-white"}
      ${active === 0 && "  text-purple-300"}
      ${active === 1 && "text-amber-400"}
      ${active === 2 && "text-emerald-400"}
      ${active === 3 && "text-rose-400"}
      ${active === 4 && "text-blue-400 "}
      ${active === 5 && "text-lime-400"}
            `}
        >
          {el}
        </div>
      ))}
      <div
        className={`absolute h-6 w-6 duration-500  
      ${active === 100 && "left-0 top-96 opacity-0 bg-red-500"}
      ${active === 0 && "left-1.5 top-[120%] bg-purple-300"}
      ${active === 1 && "left-[95px] top-[120%] bg-amber-400"}
      ${active === 2 && "left-[190px] top-[120%]  bg-emerald-400"}
      ${active === 3 && "left-[308px] top-[120%] bg-rose-400"}
      ${active === 4 && "left-[414px] top-[120%] bg-blue-400 "}
      ${active === 5 && "left-[510px] top-[120%] bg-lime-400"}
        rounded-full `}
      ></div>
    </div>
  );
}
