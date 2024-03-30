import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Ryberg | Official Website",
  description: "Explore Samuel Ryberg's projects, skills, and experience.",
  keywords: [
    "Samuel Ryberg",
    "Game",
    "Developer",
    "Programmer",
    "Engineer",
    "Portfolio",
    "C++",
    "C#",
    "Unity",
    "Unreal Engine",
  ],
  authors: [
    { name: "Samuel Ryberg", url: "https://www.linkedin.com/in/samuelryberg/" },
    { name: "ExeQ", url: "https://github.com/theexeq" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
