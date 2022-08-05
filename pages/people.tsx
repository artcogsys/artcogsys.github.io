/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
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
  return (
    <Layout pageIdx={3}>
      <article>
        <ImageList
          sx={{ width: "80%", margin: "auto", marginTop: "20px" }}
          gap={25}
          cols={3}
        >
          {allPeopleData.map((person) => (
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
                      <Button size="small">
                        {person.name} - {person.title}
                      </Button>
                    }
                    position="below"
                  />
                </div>
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </article>
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
