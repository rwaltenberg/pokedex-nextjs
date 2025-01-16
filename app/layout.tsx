import type { Metadata } from "next"
import { Inter, Marhey } from "next/font/google"
import { ThemeProvider } from "next-themes"

import Header from "@/components/Header"
import { ApolloWrapper } from "@/lib/apollo/wrapper"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const marhey = Marhey({
  variable: "--font-marhey",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rodrigo's Pokedex",
  description: "An example React/Next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${marhey.variable}`}
      suppressHydrationWarning
    >
      <body className="font-inter antialiased bg-white dark:bg-slate-950 text-slate-950 dark:text-white">
        <ThemeProvider attribute="class">
          <ApolloWrapper>
            <Header />
            <main className="container lg:max-w-5xl mx-auto my-4 lg:my-8 px-4 lg:px-0">
              {children}
            </main>
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
