import { FC } from "react";
import Slider from "react-slick";

import styles from './navigation.module.scss';



const Navigation: FC = () => {

    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
      };

  return (
    <>
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.sellBlock}>
                        <div className={styles.sellItem}><a href="#">Membership</a></div>
                        <div className={styles.sellItem}><a href="#">Coupons & Deals</a></div>
                        <div className={styles.sellItem}><a href="#">Best Sellers</a></div>
                    </div>
                    <Slider {...settings} className={styles.slider}>
                        <div className={styles.sliderItem}>70% off storewide and FREE shipping - Limited time</div>
                        <div className={styles.sliderItem}>70% off storewide and FREE shipping - Limited time</div>
                        <div className={styles.sliderItem}>70% off storewide and FREE shipping - Limited time</div>
                    </Slider>
                    <div className={styles.infoBlock}>
                        <div className={styles.wishlist}>FAQ</div>
                        <div className={styles.about}><a href="#">About Us</a></div>
                        <div className={styles.help}>Help</div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation