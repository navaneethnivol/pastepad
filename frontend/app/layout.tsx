import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner'

import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Navigation from "@/components/navigation/navigation";
import Footer from '@/components/footer/footer';

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pastepad",
  description: "A minimalist text-sharing app with customizable expiration features, empowering users to effortlessly share and access content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend_deca.className} w-11/12 sm:w-3/5 items-center content-center mx-auto pt-10 text-[var(--text-color)] bg-[var(--bg-color)]`}>
        <Navigation></Navigation>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer></Footer>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
