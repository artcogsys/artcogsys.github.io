/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { GetStaticProps } from "next";

import { Stack } from "@mui/material";

import { Publication } from "../types/publication";
import Layout from "../components/layout";
import PublicationsPagingWrapper from "../components/publicationsPagingWrapper";
import { getPublications } from "../lib/people";

import utilStyles from "../styles/utils.module.css";

/**
 * Page for the Publication tab.
 * @param publicationData List of publication objects as scraped from Google Scholar.
 */
export default function Publications({
  publicationData,
}: {
  publicationData: Array<Publication>;
}) {
  const [page, setPage] = React.useState(0);

  const pubsPerPage = 15;

  const validPubs = publicationData.filter(pub => pub.bib.author.includes("Gerven"))

  let sliceMax;
  if (page * pubsPerPage + pubsPerPage > validPubs.length) {
    sliceMax = validPubs.length;
  } else {
    sliceMax = page * pubsPerPage + pubsPerPage;
  }

  return (
    <Layout pageIdx={4}>
      <Stack spacing={1}>
        <h1 className={utilStyles.headingXl} style={{ marginTop: "0" }}>
          Publications
        </h1>
        <PublicationsPagingWrapper
          setPage={setPage}
          numPubs={validPubs.length}
          pubsPerPage={pubsPerPage}
          currentPage={page}
          publications={validPubs.slice(page * pubsPerPage, sliceMax)}
        />
      </Stack>
    </Layout>
  );
}

/**
 * Invoked by NextJS when the page is loaded. 
 * Is used to retrieve the publication data.
 */
export const getStaticProps: GetStaticProps = async () => {
  const publicationData = getPublications(true);
  return {
    props: {
      publicationData,
    },
  };
};
