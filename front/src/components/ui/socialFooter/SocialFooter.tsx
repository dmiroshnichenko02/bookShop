import { FC } from "react";

import styles from './socialFooter.module.scss';

import fb from '../../../assets/images/footer-fb.png';
import linkedIn from '../../../assets/images/footer-in.png';
import tw from '../../../assets/images/footer-tw.png';
import yt from '../../../assets/images/footer-yt.png';

const SocialFooter: FC = () => {
  return (
    <>
      <div className={styles.social}>
        <h2>Social</h2>
        <ul className={styles.socialNav}>
          <li className={styles.socialItem}>
            <a href="#">
              <img src={fb} alt="fb" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#">
              <img src={linkedIn} alt="in" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#">
              <img src={tw} alt="twitter" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#">
              <img src={yt} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialFooter;
