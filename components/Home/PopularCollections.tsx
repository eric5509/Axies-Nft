
import React from "react";
import PopularCard from "./PopularCard";
import Title from "./Title";

export default function PopularCollections() {
  const artCollections = [
    {
      id: 1,
      name: "Creative Art Collection",
      avatar: "/nft6.avif",
      creator: "Ralph Garraway",
      images: ["pop1.avif", "pop2.jpg", "pop3.jpg", "pop4.avif", "pop5.webp"],
      likes: 233,
    },
    {
      id: 2,
      name: "Colorful Abstract",
      creator: "Ralph Garraway",
      avatar: "/nft2.webp",
      images: ["pop6.jpg", "pop7.webp", "pop8.png", "pop9.png", "pop10.jpg"],
      likes: 157,
    },
    {
      id: 3,
      name: "Modern Art Collection",
      creator: "Ralph Garraway",
      avatar: "/nft5.avif",
      images: [
        "pop11.png",
        "pop12.jpg",
        "pop13.avif",
        "pop14.webp",
        "pop15.webp",
      ],
      likes: 100,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-black via-blue-900 to-black">
      <div className="wrapper ">
        <Title title="Popular Collections" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artCollections.map((data, key) => (
            <PopularCard track={key} data={data} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
