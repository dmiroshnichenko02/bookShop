import { FC } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Welcome from "../welcome/Welcome";
import Categories from "../categories/Categories";
import EBook from "../eBook/EBook";
import NewRelease from "../newRelease/NewRelease";
import WeekBook from "../weekBook/WeekBook";
import Faq from "../faq/Faq";
import Sale from "../sale/Sale";
import Information from "../information/Information";

const Home: FC = () => {
  return (
    <>
      <Welcome/>
      <Categories/>
      <EBook/>
      <NewRelease/>
      <WeekBook/>
      <Sale/>
      <Information/>
      <Faq/>
    </>
  );
};

export default Home;
