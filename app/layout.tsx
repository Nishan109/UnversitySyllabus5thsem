import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { PWAInstall } from "@/components/pwa-install"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "University Syllabus - 5th Semester",
  description: "Complete 5th semester syllabus for Computer Science & Engineering - Available offline",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["university", "syllabus", "computer science", "engineering", "5th semester", "offline"],
  authors: [{ name: "University Syllabus Team" }],
  creator: "University Syllabus Team",
  publisher: "University Syllabus Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon-192x192.png",
    shortcut: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Syllabus 5th Sem",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Syllabus 5th Sem",
    "application-name": "University Syllabus",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3b82f6",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Syllabus 5th Sem" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="University Syllabus" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <PWAInstall />
          <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
