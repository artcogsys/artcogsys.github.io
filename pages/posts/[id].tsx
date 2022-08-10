import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Post({
  postData,
}: {
  postData: {
    name: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
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
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
