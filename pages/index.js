import Head from "next/head";
import { useState } from "react";
import Clock from "../components/clock/Clock";
import Header from "../components/header/Header";
import Strap from "../components/strap/Strap";
import UpwardStrap from "../components/strap/UpwardStrap";

export default function Home() {
    let time = new Date();
    let [hour, setHour] = useState();
    let [minute, setMinute] = useState();
    const updateTime = () => {
      time = new Date();
      setHour(n(time.getHours()))
      setMinute(n(time.getMinutes()))
    }
    function n(n) {
      return n > 9 ? "" + n : "0" + n;
    }
    setInterval(updateTime, 1000);
  return (
    <>
      <Head>
        <title>Apple Watch</title>
        <meta
          name="description"
          content="Apple Watch build with NextJS (ReactJS) & TailwindCSS"
        />
        <meta name="viewport" content="width=1366" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="min-h-screen">
        <Header />
        <div className="scale-100">
          <UpwardStrap />
          <Clock hour={hour} minute={minute} />
          <Strap />
        </div>
      </body>
    </>
  );
}
