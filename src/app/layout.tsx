import type { Metadata } from "next";
import { Saira, Cousine } from "next/font/google";
import "./globals.css";

const saira = Saira({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-saira",
});

const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
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
        className={`${saira.variable} ${cousine.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
