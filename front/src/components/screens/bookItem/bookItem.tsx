import { FC, PropsWithChildren } from 'react';

import styles from './bookItem.module.scss';

const bookItem: FC<PropsWithChildren<unknown>> = () => {
  return <div className={styles.div}>bookItem</div>
}

export default bookItem