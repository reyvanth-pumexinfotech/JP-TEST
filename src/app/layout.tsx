import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
// import Navbar from "@/components/NewNavbar/navbar";
// import Footer from "@/components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "Pumex",
  // description: "Created By Pumex Team",
  title: "プメックス",
  description: "プメックスチームによって作成されました。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <ReactLenis root>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </ReactLenis>
    </html>
  );
}
