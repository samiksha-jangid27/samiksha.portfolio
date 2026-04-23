"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4 px-4 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <nav
        className={`flex items-center justify-between mx-auto w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "px-2 py-2 bg-transparent"
        }`}
      >
        <Link href="/" className="relative group flex items-center gap-2 z-10 w-24">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/40 transition-colors">
            <span className="text-primary font-bold text-lg">S</span>
          </div>
          <span className="font-semibold text-white tracking-wide opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300 absolute left-10">amiksha</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 glass rounded-full px-4 py-2 relative">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (pathname === "/" && item.path === "/#about"); // simplified active state
            
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="z-10 flex justify-end w-24">
          <Link
            href="/#contact"
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium text-white transition-all duration-300 hover:w-32 hover:bg-primary-hover"
          >
            <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </span>
            <span className="text-sm">Let’s Talk</span>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}