import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prispy",
  description: "I'm your price spy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex h-full min-h-screen w-full max-w-lg flex-col overflow-hidden bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
