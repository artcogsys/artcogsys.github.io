import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { Post } from "../../types/post";

import utilStyles from "../../styles/utils.module.css";

export default function PostPage({ postData }: { postData: Post }) {
  return (
    <Layout pageIdx={2}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Stack spacing={1}>
        <Paper elevation={3} style={{ opacity: "90%" }}>
          <Container maxWidth="xl" className={utilStyles.padded}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <MDXRemote {...postData.content} />
          </Container>
        </Paper>
      </Stack>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
