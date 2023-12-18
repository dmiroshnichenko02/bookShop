/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./cartBlock.module.scss";
import { IBookGet } from "../../../../../types/book.types";

const CartBlock: FC<PropsWithChildren<IBookGet | any>> = ({book}) => {
  console.log(book)
  return (
    <>
      {book && (
        <Link to={`/books/${book.id}`} className={styles.searchResult}>
          <img src={book.coverImageLink} alt="book" />
          <div className={styles.infoSearch}>
            <h3>{book.name}</h3>
            <h3>
              {book.authors[0].firstName} {book.authors[0].middleName}{" "}
              {book.authors[0].lastName}
            </h3>
            <h3 className={styles.priceSearch}>${book.price}</h3>
          </div>
          <div className={styles.btn}>Go to book</div>
        </Link>
      )}
    </>
  );
};

export default CartBlock;
