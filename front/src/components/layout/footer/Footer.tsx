import { FC } from "react";

import styles from "./footer.module.scss";

import SocialFooter from "../../ui/socialFooter/SocialFooter";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoSection}>
            <img src="" alt="logo" />
            <h4 className={styles.logoDescr}>
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </h4>
          </div>
          <div className={styles.company}>
            <h2>Company</h2>
            <ul className={styles.nav}>
              <li className={styles.navItem}>Home</li>
              <li className={styles.navItem}>About us</li>
              <li className={styles.navItem}>Books</li>
              <li className={styles.navItem}>Ebooks</li>
              <li className={styles.navItem}>Contact us</li>
            </ul>
          </div>
          <SocialFooter />
        </div>
        <div className={styles.subfooter}>
          <h3>
            © 2022 Arihant. All Rights Reserved.
          </h3>

          <div className={styles.subLinks}>
              <a href="#">Privacy</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
