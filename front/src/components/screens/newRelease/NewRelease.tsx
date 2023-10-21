import { FC } from "react";
import Slider from "react-slick";

import styles from "./newRelease.module.scss";

import bookFirst from "../../../assets/images/books-3.png";

const NewRelease: FC = () => {
  const settings = {
    infinity: true,
    speed: 500,
    slideToShow: 6,
    slideToScroll: 1,
    variableWidth: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerMode: false,
          variableWidth: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.release} id="release">
        <div className="container">
          <h2 className={styles.title}>New Arrivals</h2>
          <div className={styles.slider}>
            <Slider {...settings}>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.author}>By Arthur Gonzalez</h3>
                <p className={styles.bookTitle}>The Story of Success</p>
                <div className={styles.price}>$78.00</div>
              </div>
              
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewRelease;
