import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/src/app/providers";
import "./globals.css";
import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RMA - Matches",
  description: "An overview of the previous and next matches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased w-svw h-svh`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
