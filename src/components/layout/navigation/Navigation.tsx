import { FC} from "react";
import { useState } from "react";

import styles from './navigation.module.scss';

import Menu from "../../ui/menu/Menu";
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
                    <Menu/>
                    <div className={styles.search}>
                        <form>
                            <label htmlFor="search" className={styles.searchLabel}>
                                <button className={styles.searchBtn}><img src={loop} alt="search" /></button>
                                <input type="text" placeholder="Пошук" name="search" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchInput}/>
                            </label>
                        </form>
                    </div>
                    <div className={styles.login}>
                        <h3>Login</h3>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation