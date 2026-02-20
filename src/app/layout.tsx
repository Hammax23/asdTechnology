import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopContactBar from "@/components/TopContactBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASD Technology | Web Development & Digital Solutions in Canada",
  description: "ASD Technology is a leading web development company in Oakville, Canada. We specialize in custom software development, website design, e-commerce solutions, SEO, and digital marketing services for businesses across the GTA.",
  keywords: "web development, website design, custom software development, e-commerce development, SEO services, digital marketing, IT consulting, cloud solutions, web application development, Oakville, Canada, Toronto, GTA",
  authors: [{ name: "ASD Technology" }],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ASD Technology | Web Development & Digital Solutions",
    description: "Professional web development, custom software, and digital marketing services in Canada.",
    url: "https://asdtechnology.ca",
    siteName: "ASD Technology",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ASD Technology Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASD Technology | Web Development & Digital Solutions",
    description: "Professional web development, custom software, and digital marketing services in Canada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <TopContactBar />
        {children}
      </body>
    </html>
  );
}
