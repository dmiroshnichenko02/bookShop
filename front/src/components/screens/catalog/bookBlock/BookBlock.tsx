/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react'

import styles from './bookBlock.module.scss';
import { IBook } from '../../../../types/book.types';
import { Link } from 'react-router-dom';

const BookBlock: FC<PropsWithChildren<IBook | any>> = ({book}) => {
  return (
    <>
        <div className={styles.bookItem}>
            <div className={styles.img}><img src={book.coverImageLink} alt="book" /></div>
            <div className={styles.info}>
                <h2>{book.name}</h2>
                <p>{book.description.length > 30 ? book.description.slice(0, 30) + '...' : book.description}</p>
                <Link to={`/books/${book.id}`}><div className={styles.btn}>Go to book</div></Link>
            </div>
        </div>
    </>
  )
}

export default BookBlock