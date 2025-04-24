// import createMDX from "@next/mdx";
// import remarkDirective from "remark-directive"
// import remarkDirectiveRehype from "remark-directive-rehype"
// import remarkMath from "remark-math"
// import rehypeMathjax from "rehype-mathjax";
// import rehypeHighlight from "rehype-highlight";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/artcogsys",  
//   images: {
//     unoptimized: true, // Required for Next.js static export
//   },

//   reactStrictMode: true,
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
//   experimental: { mdxRs: true },
//   trailingSlash: true


// };

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkDirective,
//       remarkDirectiveRehype,
//       remarkMath],
//     rehypePlugins: [rehypeMathjax, rehypeHighlight],
//   },
// });

// export default withMDX(nextConfig)

import createMDX from '@next/mdx';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/artcogsys',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: false, // ❗ Temporarily disable this for export compatibility
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkDirective,
      remarkDirectiveRehype,
      remarkMath
    ],
    rehypePlugins: [
      rehypeMathjax,
      rehypeHighlight
    ],
  },
});

export default withMDX(nextConfig);