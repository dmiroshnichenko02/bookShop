import { FC } from 'react';

import styles from './weekBook.module.scss';

import star from '../../../assets/images/Group 11.svg';
import weekBook from '../../../assets/images/weekbook.png';

import Button from '../../ui/button/Button';

const WeekBook: FC = () => {
  return (
    <>
        <section className={styles.week}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={weekBook} alt="week book" />
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.subtitle}>Featured Book of the week</h4>
                        <h2 className={styles.title}>Birds gonna be happy</h2>
                        <img src={star} alt="star" />
                        <p className={styles.descr}>Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
                        <Button>View more</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WeekBook