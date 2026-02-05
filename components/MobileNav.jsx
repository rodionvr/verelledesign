"use client";

import "../app/globals.css";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import { useState } from "react";

const epilogue = Epilogue({
  weight: ["200","300","400"],
  subsets: ["latin"],
});

const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logo =
    "https://res.cloudinary.com/drdbt16fo/image/upload/v1768266677/logo_cai145.png";

  return (
    <nav className={`${epilogue.className} px-[30px] py-4 relative z-999`}>
      {/* TOP BAR */}
      <div className="flex items-center justify-between z-50 relative">
        <Link href="/">
          <img src={logo} alt="logo" className="h-10" />
        </Link>

        {/* BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[6px]"
        >
          <span
            className={`h-[2px] w-8 bg-[#A99082] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-8 bg-[#A99082] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-8 bg-[#A99082] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* DROPDOWN */}
      <div
        className={`absolute left-0 top-full w-full bg-[#FFF] overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-[#A99082] text-2xl">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="relative inline-block font-light"
              >
                {link.label}
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-[#A99082] scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
