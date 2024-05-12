import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { meta } from "@/constants/config";
import { NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: [
    {
      name: meta.author,
      url: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
    },
    {
      name: "ExeQ",
      url: `https://github.com/${meta.accounts.github.username}`,
    },
  ],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={inter.className}>
      <NavBar />
      <main className="min-h-screen">{children}</main>
    </body>
  </html>
);

export default RootLayout;
