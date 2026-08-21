import "./global.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aurelius Finance",
  description: "Aurelius is a cloud based personal finance intelligence platform.",
};

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}