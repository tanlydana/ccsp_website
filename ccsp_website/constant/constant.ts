import { Users, BookOpen, Lightbulb, Globe } from "lucide-react";

// ------------------- Types -------------------
export interface NavLink {
  id: number;
  url: string;
  label: string;
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export interface HeroSlide {
  src: string;
  title: string;
  description: string;
}

// ------------------- Navigation Links -------------------
export const NavLinks: NavLink[] = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#", label: "About" },
  { id: 3, url: "#", label: "Projects" },
  { id: 4, url: "#", label: "Contact" },
];

// ------------------- Features -------------------
export const Features: Feature[] = [
  { icon: BookOpen, text: "STEM Education", color: "text-blue-600" },
  { icon: Globe, text: "English Language", color: "text-green-600" },
  { icon: Lightbulb, text: "Critical Thinking", color: "text-yellow-600" },
  { icon: Users, text: "Community Focus", color: "text-purple-600" },
];

// ------------------- Hero Slides -------------------
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/home/homepage1.png",
    title: "Stem4Change",
    description: "Students engaging in hands-on STEM activities",
  },
  {
    src: "/images/home/homepage2.png",
    title: "Community Impact",
    description: "Making a difference in our community",
  },
];
