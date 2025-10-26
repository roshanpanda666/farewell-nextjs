import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farewell Message",
  description: "A heartfelt farewell message from your juniors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}