/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";


/**
 * Wrapper Component: Wraps a custom HTML layer around the NextJS App.
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"></link>
        <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
