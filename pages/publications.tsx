/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getPeopleData } from "../lib/people";
import PublicationAccordion from "../components/publications";
import { GetStaticProps } from "next";

export default function Publications({
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
    <Layout pageIdx={3}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PublicationAccordion pubs={[]} />
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
