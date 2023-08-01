//root/src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Howie AI",
  description: "Created by Howie Huntington",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
      <head>
        <title>Howie AI</title>
      </head>
        <body className={`${inter.className} flex flex-col h-screen bg-gray-100`}>
          {/* <Nav /> */}
          <div className="max-w-[95%] ml-6 mr-6 mt-8 sm:ml-8 sm:mr-8 sm:mt-10 md:ml-16 md:mr-16 md:mt-16 lg:ml-[20%] lg:mr-[20%] lg:mt-[10%]">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
