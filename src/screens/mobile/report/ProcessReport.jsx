import React from 'react';
import IntialText from '../components/IntialText';
import ReportImgage from '../../../assets/sello-2.png';
import { IoSend } from "react-icons/io5";

const ProcessReport = () => {
  return (
    <>
      {/* AVISO DE BIENVENIDA */}
      <IntialText text={'Reporte ICE BarOn'} textClase={''}/>

    <div className='report__img-box'>
        <img className='report__main-img' src={ReportImgage} alt="logo del menu" />
    </div>

    <div className='process__list-item'>
        <div className='process__name'>Nombre Apellido</div>
        <div ><span>50%</span></div>
    </div>

    <div className='card__box'>
        <div data-aos='fade-down' className='card__header card__header-flex'>
            <div className='card__header-name'>Concepto 1</div>
            <div className='card__header-time'><span className='report__card-rank rank__high'>Alto</span></div>
        </div>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='card__box'>
        <div data-aos='fade-down' className='card__header card__header-flex'>
            <div className='card__header-name'>Concepto 2</div>
            <div className='card__header-time'><span className='report__card-rank rank__medium'>Promedio</span></div>
        </div>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='card__box'>
        <div data-aos='fade-down' className='card__header card__header-flex'>
            <div className='card__header-name'>Concepto 3</div>
            <div className='card__header-time'><span className='report__card-rank rank__low'>Bajo</span></div>
        </div>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    {/* BOTON DE COMPARTIR PRUEBA */}
    <button className='mobile__button'><IoSend className='button__icon' /> <span>Compartir reporte</span></button>
    </>
  )
}

export default ProcessReport
