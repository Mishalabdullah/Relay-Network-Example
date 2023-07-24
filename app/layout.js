import "./globals.css";
import { Inter } from "next/font/google";
import RootProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relay Network test",
  description: "using Defender of OpenZepplin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider> {children}</RootProvider>
      </body>
    </html>
  );
}
