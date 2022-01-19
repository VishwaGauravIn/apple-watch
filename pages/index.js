import Head from "next/head";
import Header from "../components/header/Header";

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
      </body>
    </>
  );
}
