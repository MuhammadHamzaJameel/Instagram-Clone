import Head from "next/head";
import Header from "./Header";
// import Feed from "./Feed";
import Login from "../components/Login";

function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Login />
    </div>
  );
}
export default Home;
