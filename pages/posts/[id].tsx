import * as React from "react";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import { getAllPostIds, getPost } from "../../lib/posts";
import LayoutPostWrapper from "../../components/layoutPostWrapper";

const scope = {}

export default function Post({ source, title, date, author }) {
  return (
    <LayoutPostWrapper date={date} title={title} author={author} pageIdx={1}>
      <MDXRemote
        {...source}
        scope={scope}
      />
    </LayoutPostWrapper>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const source = await getPost(params.id as string);
  const matterResult = matter(source);
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkDirective,
        remarkDirectiveRehype,
        remarkMath,
        require("remark-prism"),
      ],
      rehypePlugins: [rehypeMathjax],
      format: "mdx",
    },
  });
  return {
    props: {
      source: mdxSource,
      ...(matterResult.data as {
        date: string;
        title: string;
        author: string;
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
