import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/snakenGame">
          <a>Play Snaken Game</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
