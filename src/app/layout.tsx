import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import Chakra from "@/components/Chakra";
const inter = Inter({ subsets: ["latin"] });
const lilta = Lilita_One({subsets:['latin'], weight:'400'})
export const metadata: Metadata = {
  title: "Blog Wave",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="./favicon.ico" />
        <Chakra>
        {children}
        </Chakra>
        </body>
    </html>
  );
}
