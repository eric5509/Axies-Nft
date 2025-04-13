import { BiHeart } from "react-icons/bi";

type Props = {
  data: {
    id: number;
    image: string;
    title: string;
    creator: string;
    creatorAvatar: string;
    category: "BSC" | "ETH" | "SOL";
    currentBid: string;
    usdPrice: string;
    likes: number;
    comingSoon?: boolean;
  };
};

export default function NftPrice({ data }: Props) {
  return (
    <div className="flex items-center justify-between mt-3 text-white">
      <div className="">
        <p className="text-xs">Current Bid</p>
        <div className="flex text-sm font-semibold gap-1 items-center mt-1">
          <p>{data.currentBid}</p>
          <p className="text-xs font-normal text-gray-300">~@{data.usdPrice}</p>
        </div>
      </div>
      <div className="flex rounded-lg px-1.5 py-1.5 bg-black text-white text-sm items-center gap-2">
        <BiHeart />
        <p className="text-xs">{data.likes}</p>
      </div>
    </div>
  );
}
