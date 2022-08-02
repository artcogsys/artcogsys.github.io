import * as React from 'react';
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export default function Research({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout pageIdx={2}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            {allPostsData.map(({ id, date, title }) => (
                <Link href={`/posts/${id}`} key={id} passHref>
                  <Button>{`${title} - `}<Date dateString={date} /></Button>
                </Link>
            ))}
          </Stack>
        </Box>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
