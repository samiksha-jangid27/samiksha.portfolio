"use client";

import { motion } from "framer-motion";

const navItems = ["Home", "About", "Work", "Contact"];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Samiksha.</h1>
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-200">
          {navItems.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              className="relative cursor-pointer"
            >
              {item}
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-px w-full bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-sm hover:bg-neutral-700 transition"
        >
          Let’s talk
        </motion.button>
      </div>
    </nav>
  );
}