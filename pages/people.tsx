/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Layout, { siteTitle } from "../components/layout";
import { getPeopleData } from "../lib/people";
import { GetStaticProps } from "next";

export default function People({
  allPeopleData,
}: {
  allPeopleData: {
    name: string;
    title: string;
    id: string;
    img: string;
  }[];
}) {
  return (
    <Layout home pageIdx={3}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ImageList
        sx={{ width: "75%", margin: "auto", marginTop: "20px" }}
        gap={25}
        cols={3}
      >
        {allPeopleData.map((person) => (
          <ImageListItem key={person.img}>
            <Link href={`/team/${person.id}`}>
              <a>
                <img
                  src={`data:image/png;base64,${person.img}`}
                  alt={person.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={person.name}
                  subtitle={<span>{person.title}</span>}
                  position="below"
                />
              </a>
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
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
