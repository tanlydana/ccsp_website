import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Nav from "../components/Home/Navbar/Nav";

const fontInter = Inter({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
});

const fontKantumruy = Kantumruy_Pro({
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Committee for Community Service Program",
  description: "Organizes and promotes community service activities.",
  icons: {
    icon: "/header-logo.svg",
    shortcut: "/header-logo.svg",
    apple: "/header-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.className} ${fontKantumruy.className} antialiased `}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
