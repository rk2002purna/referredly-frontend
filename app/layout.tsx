import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Referredly - Get Referred to Your Dream Job",
  description: "Connect with employees at top companies and get referred to your dream job through our AI-powered platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className={`${inter.className} h-full`}>
        <main className="h-full min-h-screen w-full px-4 py-8 md:px-8 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
