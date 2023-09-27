import { FC } from "react";
import Slider from "react-slick";

import styles from "./newRelease.module.scss";

import bookFirst from "../../../assets/images/book-1.png";
import star from "../../../assets/images/Group 11.svg";

const NewRelease: FC = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 1500,
    slideToShow: 4,
    slideToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <section className={styles.release}>
        <div className="container">
          <h2 className={styles.title}>New Release Books</h2>
          <h4 className={styles.subtitle}>
            1000+ books are published by different authors everyday.
          </h4>
          <div className={styles.viewLink}>
            <a href="#" target="_blank" className={styles.view}>
              View all products
            </a>
          </div>

          <div className={styles.slider}>
            <Slider {...settings}>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.bookTitle}>The Mind Connection</h3>
                <p className={styles.bookDescr}>Joyce Meyer</p>
                <img className={styles.star} src={star} alt="star" />
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.bookTitle}>The Mind Connection</h3>
                <p className={styles.bookDescr}>Joyce Meyer</p>
                <img className={styles.star} src={star} alt="star" />
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.bookTitle}>The Mind Connection</h3>
                <p className={styles.bookDescr}>Joyce Meyer</p>
                <img className={styles.star} src={star} alt="star" />
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.bookTitle}>The Mind Connection</h3>
                <p className={styles.bookDescr}>Joyce Meyer</p>
                <img className={styles.star} src={star} alt="star" />
              </div>
              <div className={styles.item}>
                <img src={bookFirst} alt="book" />
                <h3 className={styles.bookTitle}>The Mind Connection</h3>
                <p className={styles.bookDescr}>Joyce Meyer</p>
                <img className={styles.star} src={star} alt="star" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewRelease;
