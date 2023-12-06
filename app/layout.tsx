import type { Metadata } from "next";
import "./globals.css";
import { ThirdwebProvider } from "./components/thirdweb-client";
import localFont from "next/font/local";

const c64 = localFont({ src: "../public/c64.ttf" });

export const metadata: Metadata = {
  title: "Web of Truth",
  description: "A thirdweb demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={c64.className}>
        <ThirdwebProvider
          clientId="6f4b9d28993ca599e4fc109a86ffae22"
          activeChain={"mumbai"}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
