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

export default function LiveAuctions() {
  const nfts: TNFT[] = [
    {
      id: 1,
      image: "/nft1.jpg",
      title: "Hamlet Contemplates Yorick's...",
      creator: "JoneeliOlla",
      creatorAvatar: "ava1.avif",
      category: "BSC",
      currentBid: "4.89 ETH",
      usdPrice: "$12.26",
      likes: 100,
    },
    {
      id: 2,
      image: "/nft2.webp",
      title: "Space Babe - Night 2/25",
      creator: "PirraSamsdale",
      creatorAvatar: "ava2.avif",
      category: "BSC",
      currentBid: "4.89 ETH",
      usdPrice: "$12.26",
      likes: 150,
      comingSoon: true,
    },
    {
      id: 3,
      image: "/nft7.avif",
      title: "CyberPrimal 042 LAN",
      creator: "Jefferson",
      creatorAvatar: "/ava3.avif",
      category: "BSC",
      currentBid: "5.12 ETH",
      usdPrice: "$13.50",
      likes: 130,
    },
    {
      id: 4,
      image: "/nft4.jpg",
      title: "Crypto Egg Stamp #5",
      creator: "SalvadorDali",
      creatorAvatar: "ava4.avif",
      category: "BSC",
      currentBid: "3.75 ETH",
      usdPrice: "$9.80",
      likes: 95,
    },
    {
      id: 5,
      image: "/nft6.avif",
      title: "Ethereal Void",
      creator: "VanGogh",
      creatorAvatar: "ava5.png",
      category: "ETH",
      currentBid: "6.40 ETH",
      usdPrice: "$16.75",
      likes: 180,
    },
    {
      id: 6,
      image: "/nft5.avif",
      title: "Neon Pixel Art #14",
      creator: "Picasso",
      creatorAvatar: "ava6.jpg",
      category: "ETH",
      currentBid: "2.95 ETH",
      usdPrice: "$7.30",
      likes: 110,
    },
    {
      id: 7,
      image: "/nft3.jpg",
      title: "Ancient Guardian #7",
      creatorAvatar: "ava7.jpg",
      creator: "Michelangelo",
      category: "ETH",
      currentBid: "5.67 ETH",
      usdPrice: "$14.75",
      likes: 200,
    },
  ];

  return (
    <div className="px-2 lg:px-12 py-12 bg-gradient from-rose-800 to-black">
      <Title title="Live Auctions" />
      <div className="grid snap-x snap-mandatory gap-2 grid-flow-col auto-cols-[250px] overflow-x-auto">
        {nfts.map((data, key) => (
          <NftCard key={key} data={data} track={key} section="auction" />
        ))}
      </div>
    </div>
  );
}
