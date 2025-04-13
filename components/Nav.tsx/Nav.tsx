"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Links from "./Links";
import Logo from "./Logo";
import WalletSearch from "./WalletSearch";
import { useNavScrolled } from "./useNavScrolled";
import MobileNav from "./MobileNav";
import { Turn as Hamburger } from "hamburger-react";


export default function Nav() {
  const variants = {
    initial: {
      opacity: 0,
      y: -150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duartion: 1,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  const [isOpen, setOpen] = useState(false)
  const scrolled = useNavScrolled();
  const scrolledStyle = !scrolled
    ? "bg-transparent border-transparent"
    : "bg-black/40 backdrop-blur-md border-purple-900 shadow-md shadow-purple-950";

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);



    
  return (
    <div className="">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="h-16 lg:h-20 text-white z-[50000000000000] w-full fixed"
      >
        <div
          className={`h-16 lg:h-20 text-white z-[50000000000000]  border-b duration-500 w-full fixed ${scrolledStyle}`}
        >
          <div className="wrapper relative items-center flex justify-between h-full">
            <Logo />
            <Links />
            <WalletSearch />
            <div className="lg:hidden ">
              <Hamburger  toggled={isOpen} size={24} toggle={setOpen} />
            </div>
          </div>
        </div>
      </motion.div>
      <MobileNav opened={isOpen} />
    </div>
  );
}
