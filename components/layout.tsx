/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import NavTabs from "../components/navTabs";

const name = "ArtCogSys";
export const siteTitle = "Artificial Cognitive Systems Research Group";

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
        <meta name="twitter:card" content="summary_large_image [TODO]" />
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
