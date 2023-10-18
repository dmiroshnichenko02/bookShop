import { FC } from "react";

import styles from "./weekBook.module.scss";
import Button from "../../ui/button/Button";

import book from "../../../assets/images/books-2.png";

const WeekBook: FC = () => {
  return (
    <>
      <section className={styles.week}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.title}>
              Deals of the Day<span>23:59:59</span>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.item}>
                <img src={book} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>Already sold: <span>21/100</span></div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className={styles.item}>
                <img src={book} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>Already sold: <span>21/100</span></div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className={styles.item}>
                <img src={book} alt="day book" />
                <div className={styles.infoBlock}>
                  <div className={styles.author}>By Arthur Gonzalez</div>
                  <h3 className={styles.bookTitle}>A God Who Hates Women</h3>
                  <div className={styles.price}>
                    $170.00 <span>$200.00</span>
                  </div>
                  <div className={styles.sold}>Already sold: <span>21/100</span></div>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeekBook;
