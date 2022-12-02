import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Header/>
      </div>
    </div>
  );
}
