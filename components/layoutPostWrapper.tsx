import * as React from "react";
import Head from "next/head";

import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import Layout from "./layout";
import Date from "./date";

import utilStyles from "../styles/utils.module.css";

export default function LayoutPostWrapper({
  children,
  title,
  date,
  author,
  head,
  pageIdx,
}: {
  children: React.ReactNode;
  title: string;
  date: string;
  author:string;
  head?: React.ReactNode;
  pageIdx: number;
}) {
  return (
    <Layout pageIdx={pageIdx}>
      <Head>
        <title>{title}</title>
        {head}
      </Head>
      <Stack spacing={1}>
        <Paper elevation={3} style={{ opacity: "90%" }}>
          <Container maxWidth="xl" className={utilStyles.padded}>
            <h1 className={utilStyles.headingXl}>{title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={date} />
            </div>
            <span>{author}</span>
            {children}
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}
