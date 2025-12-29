import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "GOMINDZ — Building the Future with AI, Data Science & Software Engineering",
  description:
    "Harnessing the power of artificial intelligence, data science, and cutting-edge software development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
