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
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{personData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{personData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: personData.contentHtml }} />
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
