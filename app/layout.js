import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MegaOceans||Home",
  description: "Tech App Development Startup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XM1H5BVSYF"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XM1H5BVSYF');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    
    </html>
  );
}
