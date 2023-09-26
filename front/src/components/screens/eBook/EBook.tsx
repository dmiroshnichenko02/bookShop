import { FC, useState } from "react";

import styles from "./eBook.module.scss";

import image from '../../../assets/images/ebook-image.png'

const EBook: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className={styles.ebook}>
        <div className={styles.info}>
          <div className={styles.container}>
            <h3>ebook</h3>
            <h2>
              Access, Read, Practice & Engage with Digital Content (eBook)
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <form>
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
                <button>Login</button>
              </label>
            </form>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image} alt="people" />
        </div>
      </section>
    </>
  );
};

export default EBook;
