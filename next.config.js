const isProd = process.env.NODE_ENV.trim() === "production";
console.log(process.env.NODE_ENV.trim());

const nextConfig = require("@next/mdx")({
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [require("remark-prism")],
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  //assetPrefix: '/',
  basePath: isProd ? "/artcogsys.github.io" : "",
});

/** @type {import('next').NextConfig} */
module.exports = nextConfig({
  pageExtensions: ["js", "jsx", "tsx", "mdx"],
});
