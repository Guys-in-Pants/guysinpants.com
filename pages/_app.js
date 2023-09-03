import Head from "next/head";

/* eslint-disable react/prop-types */
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
