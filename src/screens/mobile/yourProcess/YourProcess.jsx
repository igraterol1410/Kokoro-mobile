import React from 'react'
import { FiUsers } from "react-icons/fi";
import IntialText from '../components/IntialText';
import { Icon } from '@iconify/react';

const YourProcess = () => {

    const process = [
        {name:'Nombre y Apellido 1', percentage:'60', id:0},
        {name:'Nombre y Apellido 2', percentage:'50', id:1},
        {name:'Nombre y Apellido 3', percentage:'80', id:2},
        {name:'Nombre y Apellido 4', percentage:'30', id:3},
        {name:'Nombre y Apellido 5', percentage:'45', id:4}
    ]

  return (
    <>
      <IntialText text={'Tu proceso: Prueba'} textClase={''} />

      {
          process && process.map((eachProcess)=>(
            <div className='process__list-item'>
                <div className='process__name' style={{width:'60%'}}>{eachProcess.name}</div>
                <div style={{width:'20%', fontWeight:'200'}}><span>{eachProcess.percentage}%</span></div>
                <div className='item-info'><Icon className='icon__info' icon="ep:more-filled" /></div>
            </div>
          ))
      }

      {/* BOTON DE COMENZAR PRUEBA */}
      <button className='mobile__button secundary__button'><FiUsers className='button__icon' /> <span>Agrega postulantes</span></button>

    </>
  )
}

export default YourProcess
