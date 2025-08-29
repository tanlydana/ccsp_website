"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "@/i18n/navigation";
import { NavLinks as LINKS } from "@/constant/constant";

const Nav = () => {
  const pathname = usePathname();
  const currentLangMatch = pathname.match(/^\/(en|km)/);
  const currentLang = (currentLangMatch ? currentLangMatch[1] : "en") as "en" | "km";

  const [navBg, setNavBg] = useState(false);

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
      <div className="flex items-center justify-between max-w-7xl mx-auto p-6 h-full container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo/main-logo.png"
            alt="logo"
            width={150}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={`/${currentLang}${link.url}`}
              className="text-base hover:text-[#B22234] text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center ">
          <LanguageSwitcher currentLang={currentLang} />
          <MobileNav currentLang={currentLang} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
