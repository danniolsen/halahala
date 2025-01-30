import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/src/app/providers";
import "@/src/app/globals.css";

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

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
