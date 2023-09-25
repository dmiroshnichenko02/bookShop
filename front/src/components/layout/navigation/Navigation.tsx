import { FC} from "react";
import { useState } from "react";

import styles from './navigation.module.scss';

import loop from '../../../assets/images/simple-line-icons_magnifier.svg';

const Navigation: FC = () => {

    const [search, setSearch] = useState("");

  return (
    <>
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logotype}>
                        <img src="#" alt="logotype" />
                    </div>
                    <div className={styles.search}>
                        <form>
                            <label htmlFor="search" className={styles.searchLabel}>
                                <button className={styles.searchBtn}><img src={loop} alt="search" /></button>
                                <input type="text" placeholder="Пошук" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchInput}/>
                            </label>
                        </form>
                    </div>
                    <div className={styles.login}>
                        <div className={styles.account}>Account</div>
                        <div className={styles.cart}>Cart:(0$)</div>
                        <div className={styles.wishlist}>Wishlist</div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation