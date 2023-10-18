import { FC } from "react";

import styles from "./sale.module.scss";

import red from '../../../assets/images/red.png';
import green from '../../../assets/images/green.png';
import blue from '../../../assets/images/blue.png';

const Sale: FC = () => {
  return (
    <>
      <section className={styles.sale}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <div className={styles.info}>
                <h5>35% OFF</h5>
                <h3>New Release</h3>
                <button>Shop Now</button>
              </div>
              <img src={red} alt="book" />
            </div>
            <div className={styles.item}>
              <div className={styles.info}>
                <h5>35% OFF</h5>
                <h3>Pre Oder Now</h3>
                <button>Shop Now</button>
              </div>
              <img src={green} alt="book" />
            </div>
            <div className={styles.item}>
              <div className={styles.info}>
                <h5>45% OFF</h5>
                <h3>Top Rated</h3>
                <button>Shop Now</button>
              </div>
              <img src={blue} alt="book" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
