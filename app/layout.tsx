import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { AutoplayAudio } from "@/components/autoplay-audio"
import { QRBanner } from "@/components/qr-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramanuj Sewa Foundation - सेवा ही धर्म है",
  description:
    "Serving humanity through Gau Sewa, Gurukul Education, Girls Marriage Support, and Health Camps. A charitable organization dedicated to uplifting underprivileged families.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans antialiased`}>
          <AutoplayAudio />
          <QRBanner />
          {children}
          <Analytics />
          <Toaster />
          <SonnerToaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
