import { FC } from "react";
import Slider from "react-slick";

import styles from "./categories.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const Categories: FC = () => {
  const genres = useSelector((state: RootState) => state.genres);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          // centerMode: true,
        },
      },
    ],
  };

  console.log(genres);

  return (
    <>
      <section id="catalog" className={styles.catalog}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Shop by Category</h2>
            <Slider {...settings} className={styles.slider}>
              {genres.map((genre) => (
                <div className={styles.sliderItem} style={{ width: "212px" }}>
                  <h3 className={styles.bookTitle}>{genre.genre}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
