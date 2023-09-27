import { FC } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Welcome from "../welcome/Welcome";
import Categories from "../categories/Categories";
import EBook from "../eBook/EBook";
import NewRelease from "../newRelease/NewRelease";

const Home: FC = () => {
  return (
    <>
      <Welcome/>
      <Categories/>
      <EBook/>
      <NewRelease/>
    </>
  );
};

export default Home;
