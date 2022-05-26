import type { NextPage } from "next";
import {Slider} from "./slider";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Yandex-Music Clone</h1>
      <Slider />
    </div>
  );
};

export default Home;
