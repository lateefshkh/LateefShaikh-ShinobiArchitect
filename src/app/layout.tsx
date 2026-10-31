import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lateef Shaikh // The Lateef & Co. - Mumbai Architect",
  description:
    "Freelance web developer and AI automation builder in Mumbai. Fast, hardened Next.js web systems and autonomous jutsu agents.",
  keywords: [
    "Lateef Shaikh",
    "The Lateef & Co.",
    "Mumbai Architect",
    "Next.js Developer",
    "AI Automation",
    "Freelance Web Developer Mumbai",
    "LangChain",
    "Autonomous Agents",
  ],
  authors: [{ name: "Lateef Shaikh" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&family=Patrick+Hand&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
        <AppProvider>
          <Header />
          <main className="w-full pt-20 bg-surface min-h-[calc(100vh-280px)] transition-colors duration-200">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
