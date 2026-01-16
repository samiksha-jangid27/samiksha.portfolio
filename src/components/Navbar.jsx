"use client";

const navItems = ["Home", "About", "Work", "Contact"];

export default function Navbar() {
  return (
    <nav>
      <h1>Samiksha</h1>

      <ul>
        {navItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button>Let's talk</button>
    </nav>
  );
}
