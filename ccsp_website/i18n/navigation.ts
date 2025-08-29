// i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "km"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "km",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
