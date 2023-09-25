import { FC } from "react";

import styles from "./socialMenu.module.scss";

import fb from '../../../assets/images/fb.svg';
import inst from '../../../assets/images/inst.svg';
import linked from '../../../assets/images/in.svg';
import tw from '../../../assets/images/tw.svg';
import pint from '../../../assets/images/pinter.svg';

const SocialMenu: FC = () => {
  return (
    <>
      <div className={styles.social}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.phone}>
              <a href="tel:+380962006694">+380962006694</a>
            </div>
            <div className={styles.socialLink}>
              <ul className={styles.links}>
                <li className={styles.item}>
                  <a href="#" target="_blank"><img src={fb} alt="facebook" /></a>
                </li>
                <li className={styles.item}>
                  <a href="#" target="_blank"><img src={inst} alt="instagram" /></a>
                </li>
                <li className={styles.item}>
                  <a href="#" target="_blank"><img src={linked} alt="linked in" /></a>
                </li>
                <li className={styles.item}>
                  <a href="#" target="_blank"><img src={tw} alt="twitter" /></a>
                </li>
                <li className={styles.item}>
                  <a href="#" target="_blank"><img src={pint} alt="pinter" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className={styles.divider}></div>
        </div>
      </div>
    </>
  );
};

export default SocialMenu;
