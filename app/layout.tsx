import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network Handlers: Custom Software, AI, Cybersecurity & Cabling",
  description: "We are a highly skilled team of software developers, technical consultants, and integration experts committed to delivering business solutions of exceptional quality and reliability.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import BeforeYouGoModal from "@/components/common/BeforeYouGoModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col">
        <Header />
        <SmoothScrolling>
          <main className="flex-grow">{children}</main>
        </SmoothScrolling>
        <ChatWidget />
        <BeforeYouGoModal />
        <Footer />
      </body>
    </html>
  );
}
