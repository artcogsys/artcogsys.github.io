/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import NavTabs from "../components/navTabs";

import Constants from "../lib/constants";

import utilStyles from "../styles/utils.module.css";
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
        <title>{Constants.SITE_TITLE}</title>
      </Head>
      <video className={styles.fixed} id="backgroundVideo" autoPlay muted loop>
        <source src="/bgvid.mp4" type="video/mp4" />
        {Constants.INFO_HTML5}
      </video>
      <header className={styles.header}>
        <Container
          maxWidth="lg"
          className={utilStyles.mainContainer}
          style={{ marginTop: "0" }}
        >
          <NavTabs pageIdx={pageIdx} />
        </Container>
      </header>
      <main className={styles.relative}>
        <Container maxWidth="lg" className={utilStyles.mainContainer}>
          {children}
        </Container>
      </main>
    </div>
  );
}
