import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/src/app/providers";
import "@/src/app/globals.css";
import Navigation from "@/src/components/Navigation";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RMA - Matches ",
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
        <Providers>{children}</Providers>
        <Navigation />
      </body>
    </html>
  );
}
