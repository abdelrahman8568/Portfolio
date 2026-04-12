import type { Metadata } from "next";
import "./styles/globals.css";
import { font1 } from "@/public/fonts/font";
import Navbar from "./components/organisms/navbar";
import ReactLenis from "lenis/react";
import Footer from "./components/organisms/footer";

export const metadata: Metadata = {
  title: "portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font1}>
        <ReactLenis root />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
