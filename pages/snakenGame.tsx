import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../components/Board/Board";

const snakenGame: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
};

export default snakenGame;
