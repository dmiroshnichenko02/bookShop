import { FC } from 'react'

import './header.module.scss';

import Navigation from '../navigation/Navigation'
import Menu from '../../ui/menu/Menu';


const Header: FC = () => {
  return (
    <header>
        <Navigation/>
        <Menu/>
    </header>
  )
}

export default Header