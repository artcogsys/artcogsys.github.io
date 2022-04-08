/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import logo from "../public/acs.png";
import AppBar from "../components/appBar";
import NavTabs from "../components/navTabs";

const name = "ArtCogSys";
export const siteTitle = "ArtCogSys Website WIP";

export default function Layout({
  children,
  home,
  pageIdx,
}: {
  children: React.ReactNode;
  home?: boolean;
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
        {home ? (
          <>
            <NavTabs pageIdx={pageIdx} />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={logo.src}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
