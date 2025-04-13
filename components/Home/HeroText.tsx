import React from "react";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="mt-16 text-white">
      <div className="max-w-xl lg:max-w-3xl  mx-auto">
        <p className="text-3xl leading-relaxed lg:text-5xl xl:hidden font-semibold text-center">
          Discover, and Collect Extraordinary Monster NFTs
        </p>
      </div>
      <motion.div
        className="text-5xl xl:block hidden font-semibold space-y-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <motion.p
          whileInView={{ x: [-20, 20, -20] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Discover, and Collect
        </motion.p>

        {/* Smooth fade-in & fade-out */}
        <motion.p
          whileInView={{ opacity: [1, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Extraordinary
        </motion.p>

        {/* Slow breathing scale effect */}
        <motion.p
          whileInView={{ scale: [1, 1, 1.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <span className="gradient-text">Monster</span>
          <span> NFTs</span>
        </motion.p>
      </motion.div>

      {/* Slow fade effect for description */}
      <motion.p
        className="text-sm text-center xl:text-start mt-4 text-gray-300"
        whileInView={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Marketplace For Monster Character Collections Non Fungible Tokens NFTs
      </motion.p>
    </div>
  );
}
