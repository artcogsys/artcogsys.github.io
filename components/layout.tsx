/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import logo from "../public/acs.png";
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
      <header className={styles.header}>
        <NavTabs pageIdx={pageIdx} />
      </header>
      <main>{children}</main>
    </div>
  );
}
