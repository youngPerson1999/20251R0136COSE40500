import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSelector from "@/components/languageSelector";
import { LanguageProvider } from "@/lib/providers/LangProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description:
    "Visualize various sorting algorithms. Compare their performance and see how they work in real-time.\nThis project is the assignment for the course COSE401 at Korea University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 flex flex-col justify-between min-h-screen`}
      >
        <LanguageProvider>
          <LanguageSelector />
          {children}
        </LanguageProvider>
        <footer className="border-t mt-auto py-4 text-center text-sm text-gray-500">
          © 2025 —{" "}
          <a
            href="https://github.com/youngPerson1999"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors"
          >
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
