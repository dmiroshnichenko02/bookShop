import { FC, useState } from "react";

import styles from "./access.module.scss";

import accessImage from '../../../assets/images/access.png';

const Access: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className={styles.access}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={accessImage} alt="free access" />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>Get over a 100 free books</h2>
              <p className={styles.descr}>
                Get access by subcribing to our newsletter. Jump start your book
                reading by quickly check through the popular book categories...
              </p>
              <form>
                <label htmlFor="email-2">
                  <input
                    type="text"
                    name="email-2"
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button>Get free books</button>
                </label>
              </form>
            </div>
          </div>
      </section>
    </>
  );
};

export default Access;
