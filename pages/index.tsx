import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import {Slider} from "./slider";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Yandex-Music Clone</h1>
      <Slider />
    </div>
  );
};

export default Home;
