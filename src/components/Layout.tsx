import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({
  title,
  subline,
  category,
  desc,
  children,
}: {
  title: string;
  category?: string;
  desc?: string;
  children: JSX.Element | JSX.Element[];
  subline?: string;
}) {
  return (
    <>
      <Head>
        <title>
          {title} - {subline} | Wald-Glas-Stützerbach
        </title>
        <meta name="description" content={desc} />
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
      </Head>
      <header className={`header relative flex  bg-cover py-8  bg-main `}>
        <div className=" left-0 top-0  flex w-full p-8 ">
          <Link
            href="/"
            className=" flex justify-center flex-row items-center gap-4"
          >
            <img src="/logo_bildmarke.png" alt="" className="h-24" />
            <img src="/logo.svg" alt="" className="h-16" />
          </Link>
        </div>

        <div
          className={`absolute bottom-0 z-10 h-56 max-h-[20vh] w-screen bg-cover bg-repeat-x mg-main`}
        ></div>
      </header>
      {children}

      <Footer />
    </>
  );
}
