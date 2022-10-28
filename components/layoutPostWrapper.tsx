import * as React from "react";
import Head from "next/head";

import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import Layout from "./layout";
import Date from "./date";

import Constants from "../lib/constants";
import utilStyles from "../styles/utils.module.css";

/**
 * Wrapper Component: Can be used to wrap the website layout around a post.
 * @param children The post to be wrapped.
 * @param title Title of the post.
 * @param date Date of publication/last edit, Format: YYYY-MM-DD.
 * @param head HTML content to be injected to the <head/> of the page. 
 * @param opaque Indicator for the opacity of the background.
 */
export default function LayoutPostWrapper({
  children,
  title,
  date,
  head,
  opaque=false
}: {
  children: React.ReactNode;
  title?: string;
  date?: string;
  head?: React.ReactNode;
  opaque?: boolean;
}) {
  return (
    <Layout pageIdx={2} title={title}>
      <Head>
        {head}
      </Head>
      <Stack spacing={1}>
        <Paper elevation={0} style={{ opacity: opaque ? "100%" : "90%" }}>
          <Container maxWidth="xl" className={utilStyles.padded}>
            {title ? <h1 className={utilStyles.headingXl}>{title}</h1> : <></>}
            {date ? <div className={utilStyles.lightText}>
              <Date dateString={date} />
            </div> : <></>}
            {children}
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}
