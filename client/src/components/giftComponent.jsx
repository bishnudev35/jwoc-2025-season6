import { motion } from "framer-motion";
import React from "react";

const PrizeCards = () => {
  return (
    <>
      <section id="rewards" className="text-white max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg"></span>
            <h1 className="relative font-extrabold text-4xl text-white">Rewards</h1>
          </div>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </div>

        {/* Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl text-glow font-semibold mb-2">
            Why you must register for
            <span className="bg-blue-800 px-2 py-1 rounded ml-2">JWoC 2024</span>?
          </h2>
          <p className="text-md text-gray-300">
            Because exciting rewards & prizes are waiting just for you.
          </p>
        </motion.div>

        {/* Reward Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "perk-1.png",
              title: "Paid Internship Opportunities",
            },
            {
              src: "perk-2.png",
              title: "Coupons & Free Domains",
            },
            {
              src: "perk-3.png",
              title: "Goodies & Cool Stickers",
            },
            {
              src: "perk-4.png",
              title: "Workshops & Masterclasses",
            },
            {
              src: "perk-5.png",
              title: "Verified Certificates",
            },
          ].map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="reward_card rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-white border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm"
            >
              <div className="relative flex justify-center mb-4">
                <img
                  src={perk.src}
                  alt={perk.title}
                  className="w-[10rem] h-[10rem] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40"></div>
              </div>
              <h4 className="text-center font-semibold text-lg">{perk.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PrizeCards;