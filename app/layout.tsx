import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Takagi Rikuto Portfolio",
  description: "Portfolio website built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-950">
          <Header />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}