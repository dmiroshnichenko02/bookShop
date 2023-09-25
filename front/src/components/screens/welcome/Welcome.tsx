import { FC } from 'react'

import styles from './welcome.module.scss';

const Welcome: FC = () => {
  return (
    <>
        <section className={styles.welcome}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h1>Bookshelf - your best choice</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis.</p>
                        <button className={styles.button}>READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Welcome