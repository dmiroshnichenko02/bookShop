import { FC } from "react";

import styles from "./welcome.module.scss";

import bookSlide from "../../../../assets/images/HERO-MEDIA.png";

import Button from "../../../ui/button/Button";

const Welcome: FC = () => {
  return (
    <>
      <section className={styles.welcome}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.infoContainer}>
                <h4>Internationally Bestselling Book</h4>
                <h1>2-Week Plan to Jump-Start Your Healing</h1>
                <p>
                  Check out the new book by Dr. Martin to find out how to stay
                  healthy and support your body.
                </p>
                <div className={styles.btn}>
                  <Button>Our Bestsellers</Button>
                </div>
              </div>
            </div>
            <div className={styles.bookSlider}>
              <img src={bookSlide} alt="books" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
