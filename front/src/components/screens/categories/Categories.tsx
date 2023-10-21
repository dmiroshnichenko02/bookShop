import { FC } from "react";
import Slider from "react-slick";

import styles from "./categories.module.scss";

import bookImg from "../../../assets/images/books-1.png";

const Categories: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
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

  return (
    <>
      <section id="catalog" className={styles.catalog}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Shop by Category</h2>
            <Slider {...settings} className={styles.slider}>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
              <div className={styles.sliderItem} style={{ width: "240px" }}>
                <div className={styles.img}>
                  <img src={bookImg} alt="book" />
                </div>
                <h3 className={styles.bookTitle}>Suspense & Thriller</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
