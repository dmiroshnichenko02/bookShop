import { FC } from "react";
import Button from "../../ui/button/Button";

import styles from "./eBook.module.scss";

import books from "../../../assets/images/books-1.png";

const EBook: FC = () => {
  return (
    <>
      <section className={styles.ebook}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.container}>
                <h4>20% off on selected books</h4>
                <h2>Bestselling</h2>
                <h3>Non-Fiction Books!</h3>
                <Button>Shop Now</Button>
              </div>
            </div>
            <div className={styles.image}>
              <img src={books} alt="books" />
              <img src={books} alt="books" />
              <img src={books} alt="books" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EBook;
