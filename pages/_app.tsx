import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Aivons HTML Template For Business Consulting"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
