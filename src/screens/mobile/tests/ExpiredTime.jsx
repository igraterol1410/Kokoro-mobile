import React, { useEffect, useState } from 'react'
import IntialText from '../components/IntialText';  
import { AiOutlineRight } from "react-icons/ai";

const ExpiredTime = () => {
    const [textClase, setTextClase] = useState('')
    const [title, setTitle] = useState('')
    const [textContent, setTextContent] = useState('')
    let expired = true

    useEffect(()=>{
        if(expired === true){
            setTextClase('test__expired-time')
            setTitle('Ups... se acabó el tiempo')
            setTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.')
        }else{
            setTextClase('test__successfull')
            setTitle('¡Bien hecho! Terminaste a tiempo')
            setTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.')
        }
    },[])

  return (
    <>
       {/* AVISO DE BIENVENIDA */}
       <IntialText text={title} textClase={textClase}/>

        {/* INTRODUCCION DEL HOME */}
        <div className='card__box'>
            <p className='card__text'>{textContent}</p>
        </div>

         {/* BOTON DE COMENZAR PRUEBA */}
         <button className='mobile__button'><AiOutlineRight className='button__icon' /> <span>Continuar</span></button>
    </>
  )
}

export default ExpiredTime
