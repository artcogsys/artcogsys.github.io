/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout";
import { getAllPeopleIds, getPersonData } from "../../lib/people";
import { Publication } from "../../types/publication";
import Head from "next/head";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PublicationAccordionPagedWrapper from "../../components/pagingPublications";

import utilStyles from "../../styles/utils.module.css";

export default function Post({
  personData,
}: {
  personData: {
    title: string;
    name: string;
    affiliation: string;
    description: string;
    image: string;
    publications: Array<Publication>;
  };
}) {
  const [page, setPage] = React.useState(0);

  const pubsPerPage = 10;

  let sliceMax;
  if (page * pubsPerPage + pubsPerPage > personData.publications.length) {
    sliceMax = personData.publications.length;
  } else {
    sliceMax = page * pubsPerPage + pubsPerPage;
  }

  return (
    <Layout pageIdx={3}>
      <Head>
        <title>Team - {personData.name}</title>
      </Head>
      <Stack spacing={1}>
        <Paper elevation={3} style={{ opacity: "90%" }}>
          <Container maxWidth="xl" className={utilStyles.padded}>
            <Stack spacing={1}>
              <Grid container spacing={2}>
                <Grid item>
                  <img
                    src={`data:image/png;base64,${personData.image}`}
                    alt={personData.title}
                    height={160}
                    width={160}
                  />
                </Grid>
                <Grid item>
                  <h1 className={utilStyles.headingXl}>{personData.name}</h1>
                  <h2 className={utilStyles.headingMd}>
                    {personData.title} - {personData.affiliation}
                  </h2>
                </Grid>
              </Grid>

              <div
                dangerouslySetInnerHTML={{ __html: personData.description }}
              />
            </Stack>
          </Container>
        </Paper>
        <PublicationAccordionPagedWrapper
          publications={personData.publications.slice(
            page * pubsPerPage,
            sliceMax
          )}
          numPubs={personData.publications.length}
          pubsPerPage={pubsPerPage}
          setPage={setPage}
          currentPage={page}
        />
      </Stack>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPeopleIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const personData = await getPersonData(params.id as string);
  return {
    props: {
      personData,
    },
  };
};
