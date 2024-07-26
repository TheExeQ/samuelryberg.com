import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { FC, PropsWithChildren } from "react";

import { FloatingNav } from "@/components";

import { ThemeProvider } from "@/components/ThemeProvider";
import { meta } from "@/constants/config";

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
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Projects", link: "/projects" },
            { name: "Blog", link: "/blog" },
            { name: "Contact", link: "/contact" },
          ]}
        />
        {children}
        {/* Footer */}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
