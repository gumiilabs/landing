import type { Metadata } from "next";
import { News_Cycle, Courier_Prime } from "next/font/google";
import "./globals.css";

const newsCycle = News_Cycle({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-news-cycle",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "gumii labs | building simple tools from complex ideas",
  description: "AI · spatial · music · education · systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsCycle.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
