/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { GetStaticProps } from "next";

import { Stack } from "@mui/material";

import { Publication } from "../types/publication";
import Layout from "../components/layout";
import PublicationsPagingWrapper from "../components/publicationsPagingWrapper";
import { getPublications } from "../lib/people";

import Constants from "../lib/constants";

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

  const pubsPerPage = 15;

  let sliceMax;
  if (page * pubsPerPage + pubsPerPage > publicationData.length) {
    sliceMax = publicationData.length;
  } else {
    sliceMax = page * pubsPerPage + pubsPerPage;
  }

  return (
    <Layout pageIdx={4}>
      <Stack spacing={1}>
        <h1 className={utilStyles.headingXl} style={{ marginTop: "0" }}>
          {Constants.LABEL_PUBLICATIONS}
        </h1>
        <PublicationsPagingWrapper
          setPage={setPage}
          numPubs={publicationData.length}
          pubsPerPage={pubsPerPage}
          currentPage={page}
          publications={publicationData.slice(page * pubsPerPage, sliceMax)}
        />
      </Stack>
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
