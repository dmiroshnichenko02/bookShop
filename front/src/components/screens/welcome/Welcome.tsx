import { FC } from "react";

import styles from "./welcome.module.scss";

import bookSlide from "../../../assets/images/bookSlider.png";
// import more from '../../../assets/images/more.svg';

import Button from "../../ui/button/Button";

const Welcome: FC = () => {
  return (
    <>
      <section className={styles.welcome}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.infoContainer}>
              <h1>Bookshelf - your best choice</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, quis.
              </p>
              {/* <button className={styles.button}>READ MORE <img src={more} alt="more" /></button> */}
              <Button>READ MORE </Button>
            </div>
          </div>
          <div className={styles.bookSlider}>
            <img src={bookSlide} alt="books" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
