import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import logo from '../../../assets/logo.svg';


const Menu = () => {
  return (
        <div className='menu__box form-control'>
            <div><Icon className='menu__icon search-icon' icon="akar-icons:search" /></div>
            <div><img className='logo__img' src={logo} alt="logo del menu" /></div>
            <div><Icon className='menu__icon search-icon' icon="ci:menu-duo" /></div>
        </div>
  )
}

export default Menu
