import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo/wrapper";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rodrigo's Pokedex",
  description: "An example React/Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={inter.variable}>
        <body className="font-inter antialiased">
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </body>
      </html>
  );
}
