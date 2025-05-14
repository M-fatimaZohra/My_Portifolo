import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Markazi_Text} from "next/font/google";
import "./globals.css";
import Header from "./Component/Header/header";
import Footer from "./Component/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const markaziText = Markazi_Text({
  variable: "--font-markazi-text",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima's PortFolio",
  description:"Front-end developer turning UI/UX designs into responsive, high-performance websites using HTML, CSS, TypeScript, Tailwind CSS, Next.js, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F9F9] text-[#1A1A1A]   ` }
    style={markaziText.style}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
