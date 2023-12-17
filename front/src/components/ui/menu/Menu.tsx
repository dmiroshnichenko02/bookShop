/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import { actions } from "../../../store/login/login.slice.ts";
import styles from "./menu.module.scss";
import logo from "../../../assets/images/LOGO-SHAPE.png";
import searchImg from "../../../assets/images/search.svg";
import Cookies from "js-cookie";
import { IBook, IBookGet } from "../../../types/book.types";

// interface IMenu {
//   user: string;
// }

const Menu: FC = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState<IBook[] | any>([]);
  const user = useSelector((state: RootState) => state.login.user);
  const authCookie = Cookies.get("authCookie");
  console.log(authCookie);

  const books = useSelector((state: RootState) => state.books);

  const viewSearchResult = () => {
    if (search !== "") {
      return books.filter((book) => {
        return (
          book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.authors.forEach((author) => {
            author.firstName.toLowerCase().includes(search.toLowerCase()) ||
              author.middleName.toLowerCase().includes(search.toLowerCase()) ||
              author.lastName.toLowerCase().includes(search.toLowerCase());
          }) ||
          book?.isbn?.toString().includes(search)
        );
      });
    }
    return [];
  };

  useEffect(() => {
    setShowSearch(viewSearchResult());
    console.log(viewSearchResult());
  }, [search]);

  return (
    <>
      <div className={styles.menu}>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logotype}>
                <img src={logo} alt="logotype" />
                <h3>book shelf</h3>
              </div>
            </Link>

            <div className={styles.category}>
              <Link to="/catalog">
                <div className={styles.catItem}>Catalog</div>
              </Link>
            </div>

            <div className={styles.search}>
              <form>
                <label htmlFor="search" className={styles.label}>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title, author or ISBN here..."
                  />
                  <button>
                    <img src={searchImg} alt="search" />
                  </button>
                </label>
              </form>
              <div
                className={styles.searchResultBlock}
                style={{ display: showSearch.length > 0 ? "block" : "none" }}
              >
                <div className={styles.wrapperSearchBlock}>
                  {showSearch.length > 0
                    ? showSearch.map((book: IBookGet) => (
                        <Link
                          to={`/books/${book.id}`}
                          onClick={() => {
                            setSearch("");
                          }}
                          className={styles.searchResult}
                        >
                          <img src={book.coverImageLink} alt="searchResult" />
                          <div className={styles.infoSearch}>
                            <h3>{book.name}</h3>
                            <h3>{book.authors[0].firstName} {book.authors[0].middleName} {book.authors[0].lastName}</h3>
                            <h3 className={styles.priceSearch}>${book.price}</h3>
                          </div>
                          <div className={styles.btn}>Go to book</div>
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            </div>

            <div className={styles.info}>
              {user === "" && authCookie !== "auth" ? (
                <Link to="/login" className={styles.login}>
                  Login/Register
                </Link>
              ) : (
                <Link to="/user" className={styles.login}>
                  Profile
                </Link>
              )}
              <div className={styles.cart}>
                Cart <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobMenu}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.logotype}>
              <img src={logo} alt="logotype" />
              <h3>book shelf</h3>
            </div>
            <div className={styles.menuBlock}>
              <div className="open">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="overlay"></div>
              <div className={styles.menuItem}>
                <ul>
                  <li className={styles.menuItems}>Categories</li>
                  <li className={styles.menuItems}>Search</li>
                  <li className={styles.menuItems}>Login</li>
                  <li className={styles.menuItems}>Cart</li>
                  <li className={styles.menuItems}>Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
