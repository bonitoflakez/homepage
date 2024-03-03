import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "~/home",
  description: "A minimal homepage for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
