import React from 'react'
import IntialText from '../components/IntialText';  
import { AiOutlineRight } from "react-icons/ai";

const Instruccions = () => {
  return (
    <>
       {/* AVISO DE BIENVENIDA */}
       <IntialText text={'Instrucciones Prueba 1'} textClase={''}/>

        {/* INTRODUCCION DEL HOME */}
        <div className='card__box'>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        </div>

         {/* BOTON DE COMENZAR PRUEBA */}
         <button className='mobile__button'><AiOutlineRight className='button__icon' /> <span>Comenzar prueba</span></button>
    </>
  )
}

export default Instruccions
