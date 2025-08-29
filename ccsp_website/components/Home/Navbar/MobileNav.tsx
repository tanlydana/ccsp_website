"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks as LINKS } from "@/constant/constant";

interface Props {
  currentLang: "en" | "km";
}

export default function MobileNav({ currentLang }: Props) {
  return (
    <div className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-7 h-7 text-white cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[280px] p-6 bg-[#0f142ed9] border-none">
          <div className="flex flex-col space-y-4 my-16 text-white">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                href={`/${currentLang}${link.url}`}
                className="text-lg font-medium hover:text-[#1E40AF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
