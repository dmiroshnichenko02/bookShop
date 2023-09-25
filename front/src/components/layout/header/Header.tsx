import { FC } from 'react'

import './header.module.scss';

import Navigation from '../navigation/Navigation'
import Menu from '../../ui/menu/Menu';
import SocialMenu from '../../ui/socialMenu/SocialMenu';


const Header: FC = () => {
  return (
    <header>
        <SocialMenu/>
        <Navigation/>
        <Menu/>
    </header>
  )
}

export default Header