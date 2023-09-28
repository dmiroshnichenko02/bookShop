import { FC, PropsWithChildren } from 'react'

import styles from './button.module.scss';

import more from '../../../assets/images/more.svg';

const Button: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <>
        <button className={styles.btn}>{children} <img src={more} alt="more" /></button>
    </>
  )
}

export default Button