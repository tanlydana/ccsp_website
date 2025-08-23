"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constant/constant";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [lang, setLang] = useState<"en" | "kh">("en");
  const [navBg, setNavBg] = useState(false);

  const handleLangChange = (selected: "en" | "kh") => setLang(selected);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] fixed w-full ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      }`}
    >
      <div className="items-center h-full justify-between max-w-7xl mx-auto p-4 grid grid-cols-2 md:grid-cols-3">
        {/* Logo */}
        <Image
          src="/images/logo/main-logo.png"
          alt="logo"
          width={150}
          height={200}
          priority
          style={{ width: "auto", height: "auto" }}
        />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-12 justify-center">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: language + mobile menu */}
        <div className="flex items-center space-x-4 justify-self-end">
          {/* Language Switcher */}
          <div className="relative">
            {lang === "en" ? (
              <Image
                src="/images/flags/eng.png"
                alt="English"
                width={25}
                height={25}
                className="cursor-pointer"
                onClick={() => handleLangChange("kh")}
              />
            ) : (
              <Image
                src="/images/flags/kh.png"
                alt="Khmer"
                width={25}
                height={25}
                className="cursor-pointer"
                onClick={() => handleLangChange("en")}
              />
            )}
          </div>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
