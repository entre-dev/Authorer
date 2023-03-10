import { type NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    Router.push("/core/login").catch((e) => console.error(e));
  }, []);
  return (
    <>
      <Head>
        <title>Authorer</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
