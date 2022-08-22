import * as React from "react";
import { useRouter } from 'next/router'
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

import Constants from "../lib/constants";

import utilStyles from "../styles/utils.module.css";
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
  const router = useRouter()

  const handleAuthor = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    author: string
  ) => {
    const id = author.split(" ")[0].toLowerCase();
    const currentLocation = window.location.href;
    console.log(currentLocation);
    if (currentLocation.includes("localhost")) {
      window.location.replace(`http://localhost:3000/team/${id}`);
    } else {
      window.location.replace(`https://artcogsys.github.io/team/${id}`);
    }
  };

  return (
    <Layout pageIdx={2}>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <h1 className={utilStyles.headingXl} style={{ marginTop: "0" }}>
            {Constants.LABEL_BLOG} Blog
          </h1>
          <nav aria-label="secondary mailbox folders">
            <List>
              {allPostsData.map(({ id, date, title, author }) => (
                <Paper key={id}>
                  <ListItem disablePadding>
                    <Typography component="a" href={`/posts/${id}`}>
                      <ListItemButton>
                        <ListItemText primary={title} />
                        <Button
                          component="a"
                          href="/"
                          size="small"
                          style={{
                            padding: "0",
                            minWidth: "0",
                            textTransform: "none",
                            fontSize: "18px",
                          }}
                          onClick={(event) => handleAuthor(event, author)}
                        >
                          {author}
                        </Button>
                        ,
                        <Date dateString={date} style={{ marginLeft: "5px" }} />
                      </ListItemButton>
                    </Typography>
                  </ListItem>
                  <Divider />
                </Paper>
              ))}
            </List>
          </nav>
        </Stack>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
