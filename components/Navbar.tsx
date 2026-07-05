"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="container flex justify-between items-center h-20">

        <h1 className="font-bold text-2xl gradient">
          Rajarajan
        </h1>

        <nav>

          <ul className="flex gap-8">

            {links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-blue-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

        </nav>

      </div>
    </header>
  );
}