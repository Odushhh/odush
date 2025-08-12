import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ctrlZ - Designed for Clarity, Built for Growth",
  description: "Freelance Design Studio based in Nairobi, Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body suppressHydrationWarning={true} className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
