import DisplayCard from "./DisplayCard";
import { FaWallet } from "react-icons/fa"; // Wallet icon
import { FaThLarge } from "react-icons/fa"; // Grid/Collection icon
import { FaImage } from "react-icons/fa"; // Image/NFT icon
import { FaTag } from "react-icons/fa"; // Price tag icon

export default function DisplayCardList() {
  const steps = [
    {
      icon: <FaWallet />,
      title: "Set Up Your Wallet",
      description:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace icon in the top right corner.",
      color: "#3B82F6",
    },
    {
      icon: <FaThLarge />,
      title: "Create Your Collection",
      description:
        "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
      color: "#22C55E",
    },
    {
      icon: <FaImage />,
      title: "Add Your NFTs",
      description:
        "Upload your work (images, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats.",
      color: "#8B5CF6",
    },
    {
      icon: <FaTag />,
      title: "List Them For Sale",
      description:
        "Choose between auctions, fixed price listings, and declining price listings. You choose how you want to sell your NFT!",
      color: "#EF4444",
    },
  ];

  return (
    <div className="wrapper gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid ">
      {steps.map((data, key) => (
        <DisplayCard track={key} key={key} data={data} />
      ))}
    </div>
  );
}
