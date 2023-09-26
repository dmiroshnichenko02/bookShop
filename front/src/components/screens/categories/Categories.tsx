import { FC } from 'react'

import styles from './categories.module.scss';

const Categories: FC = () => {
  return (
    <>
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={`${styles.item} ${styles.edu}`}>
                        <h2>Higher Education</h2>
                    </div>
                    <div className={`${styles.item} ${styles.all}`}>
                        <h2>Explore our Top Categories</h2>
                        <button className={styles.btn}>View All</button>
                    </div>
                    <div className={`${styles.item} ${styles.manage}`}>
                        <h2>Management Books</h2>
                    </div>
                    <div className={`${styles.item} ${styles.finance}`}>
                        <h2>Finance Books</h2>
                    </div>
                    <div className={`${styles.item} ${styles.engine}`}>
                        <h2>Engineering Books</h2>
                    </div>
                    <div className={`${styles.item} ${styles.commerce}`}>
                        <h2>Commerce books</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Categories