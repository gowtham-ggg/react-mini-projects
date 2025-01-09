import React from 'react';
import NavBar from './NavBar';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center 
    flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <NavBar />
      <motion.div
        className="container text-center mx-auto py-4 px-6 
            md:px-20 lg:px-32 text-white"
        initial={{ opacity: 0, y:100 }}
        transition={{duration: 1.5}}
        whileInView={{opacity : 1, y:0}}
        viewport={{once : true}}
      >
        <h2
          className="text-5xl sm:text-6xl 
            md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
        >
          Explore homes that turn your dreams into reality
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8
                py-3 rounded transition hover:bg-white hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 px-8
                py-3 rounded transition hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
