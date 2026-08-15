import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://megaoceans.com"),
  title: {
    default: "MegaOceans | Custom Software Development",
    template: "%s | MegaOceans",
  },
  description:
    "MegaOceans builds custom websites, mobile apps, e-commerce products, and scalable software for ambitious businesses.",
  applicationName: "MegaOceans",
  authors: [{ name: "MegaOceans", url: "https://megaoceans.com" }],
  creator: "MegaOceans",
  publisher: "MegaOceans",
  keywords: [
    "custom software development",
    "web development company",
    "mobile app development",
    "UI UX design",
    "e-commerce development",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
