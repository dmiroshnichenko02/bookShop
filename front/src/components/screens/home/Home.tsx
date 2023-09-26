import { FC } from "react";

import styles from "./home.module.scss";
import Welcome from "../welcome/Welcome";
import Categories from "../categories/Categories";
import EBook from "../eBook/EBook";

const Home: FC = () => {
  return (
    <>
      <Welcome/>
      <Categories/>
      <EBook/>
    </>
  );
};

export default Home;
