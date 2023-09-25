import { FC } from "react";

import styles from "./menu.module.scss";

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <ul className={styles.menuWrapper}>
          <li className={styles.item}>Головна</li>
          <li className={styles.item}>Каталог</li>
          <li className={styles.item}>Акції</li>
          <li className={styles.item}>Про нас</li>
          <li className={styles.item}>Контакти</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
