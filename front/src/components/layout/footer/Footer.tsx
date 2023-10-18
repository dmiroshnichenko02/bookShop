import { FC } from "react";

import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h2>Help</h2>
            <ul>
              <li>Contact Us</li>
              <li>Help Topics</li>
              <li>Guarantee</li>
              <li>Shipping</li>
              <li>Store Pickup</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h2>Explore</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Store Locations</li>
              <li>Events</li>
              <li>Gift Cards</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h2>Quick Links</h2>
            <ul>
              <li>Search</li>
              <li>Become A Reseller</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms Of Service</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h2>Account</h2>
            <ul>
              <li>My Account</li>
              <li>Used Book Alerts</li>
              <li>Wishlist</li>
              <li>Partners</li>
              <li>Security</li>
            </ul>
          </div>
          <div className={styles.mail}>
            <h2>Receive the latest offers &<br/> updates via email</h2>
            <form>
              <label htmlFor="mail">
                <input type="text" name="mail" />
                <button>Subscribe</button>
              </label>
            </form>
            <p>By signing up, you agree to the Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
