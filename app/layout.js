import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Verelle Studio",
  description: "Interior Design studio based in Ottawa-Gatineau area. We are here to help you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Script
          src="https://kit.fontawesome.com/180d7ac76c.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
