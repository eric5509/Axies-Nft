import { FaRocket } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

export default function HeroButtons() {
  const data = [
    {
      title: "Explore",
      icon: <FaRocket />,
    },
    {
      title: "Create",
      icon: <IoWallet />,
    },
  ];
  return (
    <div className="flex mt-10  lg:mb-0 lg:mt-5 justify-center xl:justify-start gap-5 ">
      {data.map((el, index) => (
        <div
          key={index}
          className={`active:scale-90 flex duration-300 hover:px-9 hover:py-4  hover:translate-y-1 cursor-pointer px-5 text-sm font-semibold border-2 rounded-full py-3 shadow-md items-center gap-2 ${
            index === 0
              ? "bg-black text-white border-purple-600"
              : "text-purple-600 border-white"
          }`}
        >
          <span>{el.icon}</span>
          <span className={`text-sm ${index === 1 && "text-white"}`}>
            {el.title}
          </span>
        </div>
      ))}
    </div>
  );
}
