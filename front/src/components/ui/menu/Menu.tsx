import { FC, useState } from "react";

import styles from "./menu.module.scss";

import logo from "../../../assets/images/LOGO-SHAPE.png";
import searchImg from '../../../assets/images/search.svg';

const Menu: FC = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={styles.menu}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.logotype}>
              <img src={logo} alt="logotype" />
              <h3>book shelf</h3>
            </div>

            <div className={styles.category}>
              <div className={styles.catItem}>Categories</div>
            </div>

            <div className={styles.search}>
              <form>
                <label htmlFor="search" className={styles.label}>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title, author or ISBN here..."
                  />
                  <button>
                    <img src={searchImg} alt="search" />
                  </button>
                </label>
              </form>
            </div>

            <div className={styles.info}>
              <div className={styles.login}>Login/Register</div>
              <div className={styles.cart}>Cart <span>0</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
