import { FC, PropsWithChildren, useEffect, useState } from "react";

import styles from "./bookItem.module.scss";
import { useParams } from "react-router-dom";

import useBookServices from "../../../services/bookServices";
import { IBookGet } from "../../../types/book.types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/cart/cart.slice";
import { RootState } from "../../../store/store";
import Cookies from "js-cookie";

const BookItem: FC<PropsWithChildren<unknown>> = () => {
  const [book, setBook] = useState<IBookGet>();
  const [isExist, setIsExist] = useState(false);

  const { id } = useParams();

  const numId = typeof id == "string" ? +id : null;

  const { getBookById, loading, error } = useBookServices();

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const getCookiesBooks = JSON.parse(Cookies.get("cart") || "[]");
    console.log(getCookiesBooks)
    if(cart.length === 0 && getCookiesBooks.length !== 0) {
      getCookiesBooks.forEach((book: IBookGet) => {
        dispatch(actions.toggleCart(book));
      })
    }
    cart.forEach((book: IBookGet) => {
      if (book.id === numId) {
        setIsExist(true);
      }
    })
  }, [id]);

  useEffect(() => {
    if (numId) {
      const fetchedBook = async () => {
        const res = await getBookById(numId);
        setBook(res);
      };
      fetchedBook();
    }
  }, [id]);

  
  const addToCart = () => {
    if (cart.includes(book!)) {
      Cookies.set(
        "cart",
        JSON.stringify(cart.filter((item) => item.id !== book!.id))
      );
    } else {
      Cookies.set("cart", JSON.stringify([...cart, book]));
    }
    dispatch(actions.toggleCart(book));
    setIsExist(!isExist);
  };

  console.log(cart);

  return (
    <div className={styles.book}>
      <div className="container">
        {loading ? (
          <h3>Loading</h3>
        ) : error ? (
          <h2>Book not found</h2>
        ) : book ? (
          <div className={styles.wrapperBook}>
            <div className={styles.imageBlock}>
              <img src={book.coverImageLink} alt={book.name} />
            </div>
            <div className={styles.bookInfo}>
              <h2>{book.name}</h2>

              <h3>
                Authors:{" "}
                {book.authors.map((author) => {
                  return (
                    <span
                      key={author.id}
                    >{`${author.firstName} ${author.middleName} ${author.lastName}`}</span>
                  );
                })}
              </h3>

              <p>Description: {book.description}</p>
              <div className={styles.price}>Price: {book.price}$</div>

              <div className={styles.buyBlock}>
                <div>Available quantity: {book.quantity}</div>
                {/* <label htmlFor="number">
                    <span>Quantity: </span>
                    <input type="number" name="number"/>
                  </label> */}
                <button
                  onClick={() => {
                    addToCart();
                  }}
                >
                  {isExist ? "Remove from cart" : "Add to cart"}
                </button>
              </div>

              <div className={styles.moreInfo}>
                <h4>More information</h4>
                <div className={styles.moreItem}>
                  Accessed languages:{" "}
                  {book.languages.map((lang) => {
                    return <span key={lang.id}>{lang.language}</span>;
                  })}
                </div>
                <div className={styles.moreItem}>
                  Genres:{" "}
                  {book.genres.map((genre) => {
                    return <span key={genre.id}>{genre.genre}</span>;
                  })}
                </div>
                <div className={styles.moreItem}>
                  Formats:{" "}
                  {book.formats.map((format) => {
                    return <span key={format.id}>{format.format}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookItem;
