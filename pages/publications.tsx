/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { GetStaticProps } from "next";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

import { Publication } from "../types/publication";
import Layout from "../components/layout";
import PublicationAccordion from "../components/publications";
import { getPublications } from "../lib/people";

import Constants from "../lib/constants";

import layoutStyles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Typography } from "@mui/material";

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
  const [textInput, setTextInput] = React.useState(page + 1);
  const numPubs = 15;

  const handleBack = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const handleForward = () => {
    if (page !== Math.ceil(publicationData.length / numPubs)) {
      setPage(page + 1);
    }
  };

  const handleChange = (event) => {
    if (
      !isNaN(event.target.value) &&
      event.target.value > 0 &&
      event.target.value < Math.ceil(publicationData.length / numPubs)
    ) {
      setTextInput(event.target.value);
    } else if (event.target.value === "") {
      setTextInput(event.target.value);
    }
  };

  return (
    <Layout pageIdx={4}>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <h1 className={utilStyles.headingXl}>
            {Constants.LABEL_PUBLICATIONS}
          </h1>
          <PublicationAccordion
            pubs={publicationData.slice(
              page * numPubs,
              page * numPubs + numPubs
            )}
          />
        </Stack>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            size="medium"
            onClick={handleBack}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent sx={{ padding: "6px 16px !important" }}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <TextField
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    placeholder=".."
                    variant="standard"
                    value={textInput}
                    onChange={handleChange}
                    onBlur={() => setPage(textInput - 1)}
                  />
                </Grid>
                <Grid item>
                  /{Math.ceil(publicationData.length / numPubs) + 1}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            size="medium"
            onClick={handleForward}
          >
            Next
          </Button>
        </Grid>
      </Grid>
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
