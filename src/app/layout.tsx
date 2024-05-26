import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Image from "next/image";
import Header from "@/components/Header/index";

const inter = Inter({ subsets: ["latin"] });

const helvetica = localfont({
  src: [
    {
      path: "../fonts/helvetica.otf",
    },
  ],
  variable: "--font-helvetica",
});

const urbanist = localfont({
  src: [
    {
      path: "../fonts/Urbanist.ttf",
    },
  ],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Folio 2024 ©️",
  description: "Souvik Sarkar portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${helvetica.variable} ${urbanist.variable}`}
      >
        <div className="w-full fixed z-50 bg-white left-0 top-0 h-[70px] sm:h-[100px] flex justify-center items-center border-b-2 border-b-black">
          <div className="w-[90%] h-full flex justify-between items-center ">
            <div className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] hover:rotate-180 duration-700 ease-in-out">
              <Image alt="" src={"/logo2.png"} fill />
            </div>
            <div className="relative font-urbanist">
              <Header />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
