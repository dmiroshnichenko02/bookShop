import { FC } from 'react'

import './header.module.scss';

import Navigation from '../navigation/Navigation'


const Header: FC = () => {
  return (
    <header>
        <Navigation/>
    </header>
  )
}

export default Header