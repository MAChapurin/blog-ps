import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/assets/styles/globals.css";
import { Layout } from "@/components";

const openSans = Open_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog of data from https://jsonplaceholder.typicode.com/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
