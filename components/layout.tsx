/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import NavTabs from "../components/navTabs";

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
  title="Artificial Cognitive Systems Research Group"
}: {
  children: React.ReactNode;
  pageIdx?: number;
  title?: string;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      {/**
       * <video className={styles.fixed} id="backgroundVideo" autoPlay muted loop>
        <source src="/general/bgvid.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
       */}
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
