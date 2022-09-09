import createMDX from "@next/mdx";
import remarkDirective from "remark-directive"
import remarkDirectiveRehype from "remark-directive-rehype"
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkDirective,
      remarkDirectiveRehype,
      remarkMath],
    rehypePlugins: [rehypeMathjax, rehypeHighlight],
  },
});

export default withMDX(nextConfig)

