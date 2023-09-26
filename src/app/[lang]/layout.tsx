import Navbar from "@/components/navigation/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { defaultLocale } from "../../../middleware";
import { dictionary } from "@/constants/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple Store",
  description: "Apple Store",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang ?? defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <header>
            <Navbar dict={dictionary[params.lang]} />
          </header>
          <main>{children}</main>
          <footer>
            <Footer dict={dictionary[params.lang]} />
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
