/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import NavTabs from "../components/navTabs";

import styles from "./layout.module.css";

export const siteTitle = "Artificial Cognitive Systems Research Group";

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
        <meta
          name="description"
          content="Home of the Artificial Cognitive Systems Research Group"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <video className={styles.fixed} id="backgroundVideo" autoPlay muted loop>
        <source src="/bgvid.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
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
