import { FC } from "react";

import styles from "./faq.module.scss";
import Button from "../../ui/button/Button";

const Faq: FC = () => {
  return (
    <>
      <section className={styles.faq}>
        <div className="container">
          <h2>Still not sure?</h2>
          <p>
            Jump start your book reading by quickly check through the popular
            book categories. 1000+ books are published by different authors
            everyday. Buy your favourite books on TreeBooks Today.
          </p>
          <div className={styles.btns}>
          <Button>Read FAQ</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
