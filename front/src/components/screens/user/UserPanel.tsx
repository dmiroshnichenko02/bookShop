import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { actions } from "../../../store/login/login.slice.ts";

import styles from "./userPanel.module.scss";
import CartItem from "./cartItem/CartItem.tsx";
import FavoritesItem from "./favoritesItem/FavoritesItem.tsx";
import HistoryItem from "./historyItem/HistoryItem.tsx";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserPanel: FC = () => {
  const [activePanel, setActivePanel] = useState("Cart");

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.login.user);
  const cart = useSelector((state: RootState) => state.cart);
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <>
      <div className={styles.dashboard}>
        <div className="container">
          <div className={styles.wrapper}>
            <aside className={styles.panel}>
              <ul>
                <li
                  className={`${styles.panelItem} ${
                    activePanel === "Cart" && styles.active
                  }`}
                  onClick={() => setActivePanel("Cart")}
                >
                  Cart
                  <span>{cart && cart.length > 10 ? "9+" : cart.length}</span>
                </li>
                <li
                  className={`${styles.panelItem} ${
                    activePanel === "Favorites" && styles.active
                  }`}
                  onClick={() => setActivePanel("Favorites")}
                >
                  Favorites
                  <span>
                    {favorites && favorites.length > 10
                      ? "9+"
                      : favorites.length}
                  </span>
                </li>
                {user === "ADMIN" ? (
                  <li
                    className={`${styles.panelItem} ${
                      activePanel === "Admin panel" && styles.active
                    }`}
                    onClick={() => setActivePanel("Admin panel")}
                  >
                    <Link to="/admin">Admin panel</Link>
                  </li>
                ) : null}
                <li
                  className={`${styles.panelItem} ${
                    activePanel === "Order History" && styles.active
                  }`}
                  onClick={() => setActivePanel("Order History")}
                >
                  Order History
                </li>
                <li
                  className={styles.panelItem}
                  onClick={() =>
                    {
                      Cookies.remove("authCookie");
                      Cookies.remove("authCookieId");
                      dispatch(actions.isLogin({ token: "", user: "", id: 0 }))
                    }
                  }
                >
                  Logout
                </li>
              </ul>
            </aside>
            <div className={styles.view}>
              {activePanel === "Cart" && <CartItem />}
              {activePanel === "Favorites" && <FavoritesItem />}
              {activePanel === "Order History" && <HistoryItem />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
