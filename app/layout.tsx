import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ClosetOfficeIdeas — Turn Your Closet Into Your Dream Cloffice",
    template: "%s | ClosetOfficeIdeas",
  },
  description:
    "The #1 resource for cloffice ideas, curated Amazon product picks, and step-by-step guides to transform any closet into a beautiful, functional home office.",
  keywords:
    "cloffice, closet office, closet home office, cloffice ideas, work from home office, closet office conversion, cloffice Amazon",
  openGraph: {
    title: "ClosetOfficeIdeas — Turn Your Closet Into Your Dream Cloffice",
    description:
      "Cloffice ideas, Amazon picks, and step-by-step guides to build your dream closet home office.",
    siteName: "ClosetOfficeIdeas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-brand-cream`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
