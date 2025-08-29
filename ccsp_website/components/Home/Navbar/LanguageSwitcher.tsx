"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const languages = {
  en: "English",
  km: "ភាសាខ្មែរ",
} as const;

type Language = keyof typeof languages;

const languageAssets: Record<Language, { label: string; flag: string }> = {
  en: { label: "English", flag: "/images/flags/eng.png" },
  km: { label: "ភាសាខ្មែរ", flag: "/images/flags/kh.png" },
};

export default function LanguageSwitcher({ currentLang }: { currentLang: Language }) {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLang, setSelectedLang] = useState<Language>(currentLang);
  const [open, setOpen] = useState(false);

  // ✅ sync with cookie & currentLang
  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1] as Language | undefined;

    if (cookieLang && languages[cookieLang]) {
      setSelectedLang(cookieLang);
    } else {
      setSelectedLang(currentLang);
    }
  }, [currentLang]);

  // ✅ sync with URL when it changes
  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const pathLang = segments[0] as Language | undefined;

    if (pathLang && languages[pathLang]) {
      setSelectedLang(pathLang);
    }
  }, [pathname]);

  const handleLangChange = (newLang: Language) => {
    setSelectedLang(newLang);
    setOpen(false);

    setTimeout(() => {
      const segments = pathname.split("/").filter(Boolean);
      if (segments[0] === "en" || segments[0] === "km") {
        segments[0] = newLang;
      } else {
        segments.unshift(newLang);
      }
      const newPath = "/" + segments.join("/");

      router.replace(newPath);
      document.cookie = `locale=${newLang}; path=/; max-age=31536000`;
    }, 100);
  };

  const currentLangAssets = languageAssets[selectedLang];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 text-base font-medium bg-transparent hover:bg-transparent">
          <Image
            src={currentLangAssets.flag}
            alt={`${currentLangAssets.label} flag`}
            width={23}
            height={23}
          />
          <span className="hidden sm:inline">{currentLangAssets.label}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {Object.entries(languages).map(([langKey, label]) => (
          <DropdownMenuItem
            key={langKey}
            onClick={() => handleLangChange(langKey as Language)}
            className="text-base cursor-pointer flex items-center gap-2"
          >
            <Image
              src={languageAssets[langKey as Language].flag}
              alt={`${label} flag`}
              width={23}
              height={23}
            />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
