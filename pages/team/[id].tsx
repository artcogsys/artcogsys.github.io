/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/layout";
import { getAllPeopleIds, getPersonData } from "../../lib/people";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
  personData,
}: {
  personData: {
    title: string;
    name: string;
    description: string;
    image: string;
  };
}) {
  return (
    <Layout pageIdx={3}>
      <Head>
        <title>Team - {personData.name}</title>
      </Head>
      <article>
        <img
          src={`data:image/png;base64,${personData.image}`}
          alt={personData.title}
          style={{ marginTop: "20px" }}
        />
        <h1 className={utilStyles.headingXl}>{personData.name}</h1>
        <h2 className={utilStyles.headingMd}>{personData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: personData.description }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPeopleIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const personData = await getPersonData(params.id as string);
  return {
    props: {
      personData,
    },
  };
};
