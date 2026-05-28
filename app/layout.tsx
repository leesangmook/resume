import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gogotr.dev"),
  title: "gogotr.dev",
  description:
    "Backend engineer portfolio focused on real-time session platforms, event-driven systems, and large-scale traffic.",
  openGraph: {
    title: "gogotr.dev",
    description:
      "Backend engineer portfolio focused on real-time session platforms, event-driven systems, and large-scale traffic.",
    type: "website",
    images: [
      {
        url: "/gogotrdev.png",
        width: 1200,
        height: 630,
        alt: "gogotr.dev Open Graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gogotr.dev",
    description:
      "Backend engineer portfolio focused on real-time session platforms, event-driven systems, and large-scale traffic.",
    images: ["/gogotrdev.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
