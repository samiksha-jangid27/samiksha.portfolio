"use client";

const navItems = ["Home", "About", "Work", "Contact"];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Samiksha.</h1>

        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-400">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-px w-full bg-white scale-x-0 hover:scale-x-100 transition-transform origin-left" />
            </li>
          ))}
        </ul>

        <button className="bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-sm hover:bg-neutral-700 transition">
          Let’s talk
        </button>
      </div>
    </nav>
  );
}
