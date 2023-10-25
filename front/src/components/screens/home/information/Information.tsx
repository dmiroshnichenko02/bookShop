import { FC } from 'react'

import styles from './information.module.scss';

import delivery from '../../../../assets/images/delivery-car 1.svg';
import custom from '../../../../assets/images/customer-service 1.svg';
import value from '../../../../assets/images/value 1.svg';
import pay from '../../../../assets/images/secure-pay 1.svg';

const Information: FC = () => {
  return (
    <>
        <section className={styles.information}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <img src={delivery} alt="icon" />
                        <div className={styles.text}>
                            <h3>Free Delivery</h3>
                            <h4>For all orders over $99</h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src={custom} alt="icon" />
                        <div className={styles.text}>
                            <h3>Expert customer Service</h3>
                            <h4>For a shopping experience </h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src={value} alt="icon" />
                        <div className={styles.text}>
                            <h3>Amazing Value</h3>
                            <h4>We offer competitive prices</h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src={pay} alt="icon" />
                        <div className={styles.text}>
                            <h3>Safe Payment</h3>
                            <h4>100% secure payment</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Information