/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV.trim() === "production";
console.log(process.env.NODE_ENV.trim());

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  //assetPrefix: '/',
  basePath: isProd ? "/artcogsys.github.io" : "",
};

module.exports = nextConfig;
