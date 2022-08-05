/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import NavTabs from "../components/navTabs";

import Constants from "../lib/constants";

import styles from "./layout.module.css";

/**
 * The Base layout of the website. Wraps the content with a navigation bar, background video and meta tags
 * @param children The content of the page.
 * @param pageIdx The idx of the page on the navigation bar.
 * @returns {React.ReactNode}
 */
export default function Layout({
  children,
  pageIdx,
}: {
  children: React.ReactNode;
  pageIdx?: number;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/acs.png" />
        <meta name="description" content={Constants.META_DESCRIPTION} />
        <meta name="og:title" content={Constants.SITE_TITLE} />
      </Head>
      <video className={styles.fixed} id="backgroundVideo" autoPlay muted loop>
        <source src="/bgvid.mp4" type="video/mp4" />
        {Constants.INFO_HTML5}
      </video>
      <header className={styles.header}>
        <article>
          <NavTabs pageIdx={pageIdx} />
        </article>
      </header>
      <main className={styles.relative}>{children}</main>
    </div>
  );
}
