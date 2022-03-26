import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';
import ReportImgage from '../../../assets/sello.svg'
import { BiAlarm } from "react-icons/bi";;

const Report = () => {

    const testTime = '10 mins'
  return (
    <>
      {/* AVISO DE BIENVENIDA */}
        <IntialText text={'Prueba ICE BarOn'} textClase={''}/>

        <div className='report__img-box'>
            <img className='report__main-img' src={ReportImgage} alt="logo del menu" />
        </div>

    {/* CUERPO DEL REPORTE */}
        <div className='card__box'>
        <div data-aos='fade-down' className='card__header card__header-flex'>
            <div className='card__header-name'>Sobre la prueba</div>
            <div className='card__header-time'><BiAlarm className="mobile-icon time__icon" /><span>{testTime}</span> </div>
        </div>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </>
  )
}

export default Report
