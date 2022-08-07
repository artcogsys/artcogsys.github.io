import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

import Constants from "../lib/constants";

import styles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function Research({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
  }[];
}) {
  console.log(allPostsData);
  return (
    <Layout pageIdx={2}>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <Paper>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </Paper>
          </List>
        </nav>
        <Stack spacing={2}>
          {allPostsData.map(({ id, date, title, author }) => (
            <Link href={`/posts/${id}`} key={id} passHref>
              <Button>
                {`${title} - `}
                <Date dateString={date} />
                {author}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
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
