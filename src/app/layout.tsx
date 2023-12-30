import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { DataProvider } from "@/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Galery",
  description: "Infinite galley generate the number of images by using Lorem Picsum API ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider key={"layout"}>
          <main className="max-w-7xl mx-auto bg-[#0F1117] ">
            <Header />
            {children}
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
