import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav.tsx/Nav";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Axies NFT - Collect, Trade & Battle Digital Creatures",
  description:
    "Discover Axies NFT, a revolutionary platform where you can collect, trade, and battle unique digital creatures powered by blockchain technology. Own your assets, join a thriving community, and explore the future of gaming and digital ownership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${font.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
