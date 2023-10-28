import { FC, PropsWithChildren } from 'react';

import styles from './bookItem.module.scss';
import { useParams } from 'react-router-dom';

const BookItem: FC<PropsWithChildren<unknown>> = () => {

  const {id} = useParams()

  return <div className={styles.div}>bookItem {id} </div>
}

export default BookItem