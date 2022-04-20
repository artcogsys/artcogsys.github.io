/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getPublications } from "../lib/people";
import PublicationAccordion, { Publication } from "../components/publications";
import { GetStaticProps } from "next";

export default function Publications({
  publicationData,
}: {
  publicationData: Array<Publication>;
}) {
  const [page, setPage] = React.useState(0);

  return (
    <Layout pageIdx={3}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Publications</h1>
        <PublicationAccordion pubs={publicationData} />
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
