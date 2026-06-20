import type { Metadata } from "next";
import "./styles/globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Triplora - Your Travel Partner",
  description: "Discover amazing places with Triplora at exclusive deals",
  openGraph: {
    title: "Triplora - Your Travel Partner",
    description: "Discover amazing places with Triplora at exclusive deals",
    url: "https://triplora.com",
    siteName: "Triplora",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
