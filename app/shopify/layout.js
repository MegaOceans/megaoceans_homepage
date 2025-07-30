import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MegaOceans - Shopify Development Company",
  description:
    "Partner with us to develop your e-commerce Store With the Best Shopify Development Company while maintaining 100% ownership and control.",
};

export default function ShopifyLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
