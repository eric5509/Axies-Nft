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

export default function NftTitle({data}: Props) {
  return (
    <div className="text-white border-b border-gray-500 pb-2 ">
      <p className="w-full text-[13px] mt-3 font-medium mb-3 overflow-hidden text-ellipsis text-nowrap">{data.title}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg border-2">
            <img src={data.creatorAvatar} className="h-full w-full rounded-lg object-cover" alt="" />
          </div>
          <div className="text-xs">
            <p className="text-gray-300 mb-0.5">Creator</p>
            <p className="font-semibold">{data.creator}</p>
          </div>
        </div>
        <p className="px-2 py-1 rounded shadow-md text-xs bg-blue-500 text-white font-semibold ">{data.category}</p>
      </div>
    </div>
  );
}
