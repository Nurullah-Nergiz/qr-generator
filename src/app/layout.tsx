import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Nav from "./component/nav";
import Header from "./component/header/indexx";
import Footer from "./component/footer/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Qr Code Generator App",
   description: "Generated by Nurullah Nergiz",
   keywords: "qrcode, nurullah,Nurullah Nergiz,",
   // meta:,
   robots: "index",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head>
            <link
               href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
               rel="stylesheet"></link>
         </head>
         <body className={inter.className + " p-6"}>
            <div className="container max-w-6xl h-full mx-auto  flex flex-col">
               <section className="h-16 flex items-center justify-between ">
                  <Header />
                  <Nav />
               </section>
               <main className="h-full  my-4 ">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
