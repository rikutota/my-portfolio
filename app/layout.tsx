import type { Metadata } from "next";
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
        <div className="min-h-screen bg-stone-950 text-stone-100">
          {children}
        </div>
      </body>
    </html>
  );
}