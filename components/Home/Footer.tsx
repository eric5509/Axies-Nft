import React from "react";
import FooterSubscribe from "./FooterSubscribe";
import FooterLogoSocials from "./FooterLogoSocials";
import FooterLinkComp from "./FooterLinkComp";

export default function Footer() {
  const footerLinks = [
    {
      category: "My Account",
      links: [
        { name: "Authors", url: "/authors" },
        { name: "Collection", url: "/collection" },
        { name: "Author Profile", url: "/author-profile" },
        { name: "Create Collection", url: "/create-collection" },
      ],
    },
    {
      category: "Resources",
      links: [
        { name: "Help & Support", url: "/help-support" },
        { name: "Live Auctions", url: "/live-auctions" },
        { name: "Item Details", url: "/item-details" },
        { name: "Activity", url: "/activity" },
      ],
    },
    {
      category: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Our Blog", url: "/blog" },
        { name: "Discover", url: "/discover" },
      ],
    },
  ];

  return (
    <div className="bg-black border-t-2 border-purple-950 mt-20 text-white py-16">
      <div className="grid wrapper px-10 grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-10">
        <FooterLogoSocials />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-10 justify-between">
          {footerLinks.map((el, key) => (
            <FooterLinkComp key={key} links={el.links} title={el.category} />
          ))}
        </div>
        <FooterSubscribe />
      </div>
    </div>
  );
}
