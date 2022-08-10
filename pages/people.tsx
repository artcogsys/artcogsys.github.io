/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Layout from "../components/layout";
import { getPeopleData } from "../lib/people";
import { GetStaticProps } from "next";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Constants from "../lib/constants";

import layoutStyles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function People({
  allPeopleData,
}: {
  allPeopleData: {
    name: string;
    title: string;
    id: string;
    image: string;
  }[];
}) {
  //const titles = allPeopleData.map((person) => person.title).sort();
  const titles = [
    "Principal Investigator",
    "Assistant Professor",
    "Research Fellow",
    "Postdoctoral Researcher",
    "PhD Student",
  ];
  console.log(titles);

  const CardStack = titles.map((title, idx) => (
    <Paper elevation={3} style={{ opacity: "94%" }} key={idx}>
      <Container maxWidth="xl" className={utilStyles.padded}>
        <Stack spacing={1}>
          <h2 className={utilStyles.headingLg}>{title}</h2>
          <ImageList gap={10} cols={3}>
            {allPeopleData
              .filter((person) => person.title === title)
              .map((person) => (
                <ImageListItem key={person.image}>
                  <Link href={`/team/${person.id}`} passHref>
                    <div>
                      <img
                        src={`data:image/png;base64,${person.image}`}
                        alt={person.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={
                          <Button size="large" sx={{ textTransform: "none" }}>
                            {person.name}
                          </Button>
                        }
                        position="below"
                      />
                    </div>
                  </Link>
                </ImageListItem>
              ))}
          </ImageList>
        </Stack>
      </Container>
    </Paper>
  ));

  return (
    <Layout pageIdx={3}>
      <Stack spacing={1}>{CardStack}</Stack>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPeopleData = getPeopleData();
  return {
    props: {
      allPeopleData,
    },
  };
};
