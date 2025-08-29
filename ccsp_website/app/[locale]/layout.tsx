import type { Metadata } from "next";
import { Montserrat, Kantumruy_Pro } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Nav from "../../components/Home/Navbar/Nav";
import "./globals.css";

const latin = Montserrat({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const khmer = Kantumruy_Pro({
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["khmer"], 
  variable: "--font-kantumruy",
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

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${latin.variable} ${khmer.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
