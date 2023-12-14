import type { Metadata } from "next";
import "./globals.css";
import { ThirdwebProvider } from "./components/thirdweb-client";
import { ThemeProvider } from "./components/theme-provider";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThirdwebProvider
            clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
            activeChain={process.env.NEXT_PUBLIC_THIRDWEB_ACTIVE_CHAIN}
          >
            {children}
          </ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
