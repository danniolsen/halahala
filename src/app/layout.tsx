import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/src/app/providers";
import "@/src/app/globals.css";
import AppHeader from "@/src/app/components/AppHeader";
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
        <AppHeader />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
