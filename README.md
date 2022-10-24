# Homepage of the Artificial Cognitive Systems Lab - Development Guide

This guide provides a comprehensive documentation of the website's architecture and instructions of how to add/adjust the website itself or content therein.

## Architecture

### Framework/Language overview

- [**NextJS:**](https://nextjs.org/) The website is built with the NextJS framework.

- [**ReactJS:**](https://reactjs.org/) The web components are built using ReactJS.

- [**Typescript:**](https://www.typescriptlang.org/) All Javascript code is written using the Typescript language language extension. This is to enable strongly typed programming within Javascript.

- [**MDXJS:**](https://mdxjs.com/) Posts are written using the MDXJS framework. MDX allows the combination of Markdown, HTML and Javascript code within a single file to create richer documents.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Exporting updated version

```
- npm run build_dev
- npm run export_dev
- cd docs
- http-server
```

# TODO

- Font on exported version doesnt match font on dev version. gets overwritten during export.
