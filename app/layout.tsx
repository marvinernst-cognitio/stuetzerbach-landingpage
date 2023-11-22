import React from "react";
import "../styles/globals.css";
import Footer from "components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <title>Wald-Glas-Stützerbach</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#719751" />
        <meta name="msapplication-TileColor" content="#719751" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children} <Footer />
      </body>
    </html>
  );
}
