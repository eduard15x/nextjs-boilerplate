import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const oxanium = Oxanium({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-oxanium", // Optional: Define a CSS variable for the font
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Nomad Entertainment",
  description:
    "Presentation site representing Digital Nomad Entertainment Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oxanium.className} antialiased flex flex-col min-h-screen body-bg`}
      >
        <Header />

        <div className="gradient-top flex items-center justify-center">
          <Image
            src="/Gradients-top.png"
            alt={"Gradient Image On Top"}
            width="100"
            height="100"
          />
        </div>

        <main className="flex-1 pt-20 w-full max-content-size m-auto main-min-height">
          {children}
        </main>

        <div className="relative">
          <div className="gradient-bottom flex items-center justify-center">
            <Image
              src="/Gradients-Bottom.png"
              alt={"Gradient Image On Top"}
              width="100"
              height="100"
            />
          </div>
          <div className="bottom-image pb-8 flex items-center justify-center">
            <Image
              src="/Digital_Nomad_Logo_Gray_Transp.png"
              alt={"Gradient Image On Top"}
              width="100"
              height="100"
            />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
