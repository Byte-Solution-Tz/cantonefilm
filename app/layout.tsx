import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: "Cantone Films | Creating Stories That Last",
  description:
    "Cantone Films is a story-driven production company creating impactful visual narratives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-cream text-black">
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
