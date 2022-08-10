import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  id: string;
  title: string;
  date: string;
  author: string;
  content?: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};
