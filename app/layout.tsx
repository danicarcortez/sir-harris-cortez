import { ThemeModeScript, useThemeMode } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./_components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sir Harris Cortez",
  description: "Boat Plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-slate-800 h-[100dvh]`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
