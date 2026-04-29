import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, JetBrains_Mono } from "next/font/google";
import TopBar from "@/components/TopBar";
import Colophon from "@/components/Colophon";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "razacontent · Mohammed Raza · Content designer, engineer, strategist",
  description:
    "Mohammed Raza — senior content designer, engineer, and strategist. Eight years across Amazon Prime, Crunchyroll, Shopify, TurboTax, and Alaska Airlines. AI-native content systems for products at billion-user scale.",
  openGraph: {
    title: "razacontent · Mohammed Raza",
    description:
      "A content canary in the data mine. Senior content designer & strategist.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${hand.variable}`}
    >
      <body className="antialiased">
        <TopBar />
        {children}
        <Colophon />
      </body>
    </html>
  );
}
