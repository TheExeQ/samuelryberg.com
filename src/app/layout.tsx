import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { FC, PropsWithChildren } from "react";

import { FloatingNav, Footer } from "@/components";

import { ThemeProvider } from "@/components/ThemeProvider";
import { meta, nav } from "@/constants/config";

import "@/styles/globals.css";

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

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={GeistSans.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <FloatingNav navItems={nav} />
        <div className="relative z-10 min-h-screen overflow-hidden">
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
