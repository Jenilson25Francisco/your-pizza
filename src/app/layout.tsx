import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "A sua pizzaria",
  description: "O melhor lugar para encomendar a sua pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
