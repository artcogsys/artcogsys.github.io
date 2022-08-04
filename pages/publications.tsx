/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Head from "next/head";
import { GetStaticProps } from "next";

import { Publication } from "../types/publication";

import Layout, { siteTitle } from "../components/layout";
import PublicationAccordion from "../components/publications";
import { getPublications } from "../lib/people";

import utilStyles from "../styles/utils.module.css";

/**
 * Page for the Publication tab.
 * @param publicationData List of publication objects as scraped from Google Scholar
 * @returns {React.ReactNode}
 */
export default function Publications({
  publicationData,
}: {
  publicationData: Array<Publication>;
}) {
  const [page, setPage] = React.useState(0);
  const numPubs = 15;

  return (
    <Layout pageIdx={4}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Publications</h1>
        <PublicationAccordion
          pubs={publicationData.slice(page, page + numPubs)}
        />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const publicationData = getPublications(true);
  return {
    props: {
      publicationData,
    },
  };
};
