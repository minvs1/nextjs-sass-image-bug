import Head from "next/head";

import barImg from "../assets/images/bar.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="with-background">{"Lorem ipsum dolor sit amet"}</div>

        <hr />

        <img src={barImg} />
      </main>
    </div>
  );
}
