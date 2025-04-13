import React from "react";
import TopSellersCard from "./TopSellersCard";
import Title from "./Title";

export default function TopSellers() {
  const users = [
    {
      id: 1,
      name: "Crispin Berry",
      eth: 214.2,
      avatar: "/nft1.jpg",
      background: "#FFD700", // Gold
    },
    {
      id: 2,
      name: "Windsor Lane",
      eth: 102.7,
      avatar: "/pop4.avif",
      background: "#DDA0DD", // Plum
    },
    {
      id: 3,
      name: "Blake Banks",
      eth: 68.2,
      avatar: "/pop1.avif",
      background: "#90EE90", // Light Green
    },
    {
      id: 4,
      name: "Matt Ramos",
      eth: 38.4,
      avatar: "/nft2.webp",
      background: "#FF69B4", // Hot Pink
    },
    {
      id: 5,
      name: "Tommy Alvarez",
      avatar: "/pop6.jpg",
      eth: 170.3,
      background: "#87CEEB", // Sky Blue
    },
    {
      id: 6,
      name: "Andy Hurlbutt",
      eth: 82.7,
      avatar: "/ava4.avif",
      background: "#FFA07A", // Light Salmon
    },
    {
      id: 7,
      name: "Monica Lucas",
      eth: 52.8,
      avatar: "/nft7.avif",
      background: "#FF6347", // Tomato
    },
    {
      id: 8,
      name: "Harper Wilcher",
      eth: 29.2,
      avatar: "/pop15.webp",
      background: "#FF8C00", // Dark Orange
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="wrapper">
        <Title title="Top Sellers" hide={true} />
        <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {users.map((el, key) => (
            <TopSellersCard user={el} track={key} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
