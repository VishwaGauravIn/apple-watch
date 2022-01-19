import Head from "next/head";
import Clock from "../components/clock/Clock";
import Header from "../components/header/Header";
import Strap from "../components/strap/Strap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clock</title>
        <meta
          name="description"
          content="Just a Clock build in NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen">
        <Header />
        <Clock/>
        <Strap/>
      </body>
    </>
  );
}
