import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layouts/Layout";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Caramel Laboratory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </div>
  );
}

export default MyApp;
