import NftCard from "./NftCard";
import Title from "./Title";

type TNFT = {
  id: number;
  image: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  category: "BSC" | "ETH" | "SOL"; // Enum-like restriction
  currentBid: string;
  usdPrice: string;
  likes: number;
  comingSoon?: boolean;
};

export default function TodayPicks() {
  const nfts: TNFT[] = [
    {
      id: 1,
      image: "/new1.jpg",
      title: "Hamlet Contemplates Yorick's...",
      creator: "SalvadorDali",
      creatorAvatar: "/ava5.png",
      category: "BSC",
      currentBid: "4.89 ETH",
      usdPrice: "$12.26",
      likes: 100,
    },
    {
      id: 2,
      image: "/new3.avif",
      title: "Space Babe - Night 2/25",
      creator: "SalvadorDali",
      creatorAvatar: "/ava1.avif",
      category: "BSC",
      currentBid: "4.89 ETH",
      usdPrice: "$12.26",
      likes: 150,
      comingSoon: true,
    },
    {
      id: 3,
      image: "/new4.avif",
      title: "CyberPrimal 042 LAN",
      creator: "SalvadorDali",
      creatorAvatar: "/nft3.jpg",
      category: "BSC",
      currentBid: "5.12 ETH",
      usdPrice: "$13.50",
      likes: 130,
    },
    {
      id: 4,
      image: "/new2.jpg",
      title: "Crypto Egg Stamp #5",
      creator: "SalvadorDali",
      creatorAvatar: "/nft4.jpg",
      category: "BSC",
      currentBid: "3.75 ETH",
      usdPrice: "$9.80",
      likes: 95,
    },
    {
      id: 5,
      image: "/new6.jpg",
      title: "Ethereal Void",
      creator: "VanGogh",
      creatorAvatar: "pop9.png",
      category: "ETH",
      currentBid: "6.40 ETH",
      usdPrice: "$16.75",
      likes: 180,
    },
    {
      id: 6,
      image: "/new9.jpg",
      title: "Neon Pixel Art #14",
      creator: "Picasso",
      creatorAvatar: "pop8.png",
      category: "ETH",
      currentBid: "2.95 ETH",
      usdPrice: "$7.30",
      likes: 110,
    },
    {
      id: 7,
      image: "/new7.avif",
      title: "Galaxy Wanderer",
      creator: "Leonardo",
      creatorAvatar: "/nft5.avif",
      category: "SOL",
      currentBid: "7.88 ETH",
      usdPrice: "$20.10",
      likes: 220,
    },
    {
      id: 8,
      image: "/new5.png",
      title: "Mystic Feline #002",
      creator: "Banksy",
      creatorAvatar: "/pop7.webp",
      category: "SOL",
      currentBid: "3.20 ETH",
      usdPrice: "$8.40",
      likes: 140,
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-black via-emerald-900 to-black">
      <Title title="Today's Picks"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 wrapper">
        {nfts.map((data, key) => (
          <NftCard track={key} key={key} data={data} section="picks" />
        ))}
      </div>
    </div>
  );
}
