import React from 'react'
import IntialText from '../components/IntialText';
import { BiAlarm } from "react-icons/bi";

const PostulantHome = () => {
    const testTime = '10 mins'
    const tests = [
        {name:'Prueba 1', time: '10 mns', id: 0},
        {name:'Prueba 2', time: '15 mns', id: 1},
        {name:'Prueba 3', time: '30 mns', id: 2},
    ]
  return (
    <>
      {/* AVISO DE BIENVENIDA */}
        <IntialText text={'Hola postulante'} textClase={''}/>

    {/* INTRODUCCION DEL HOME */}
        <div className='card__box'>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        </div>
    
    {/* TESTS DEL USUARIO */}

    {
        tests && tests.map((test)=>(
            <div key={test.id} className='card__box'>
                <div className='card__title'><h3 className='card__header'>{test.name}</h3></div>
                <div data-aos='fade-down' className='card__header-flex'>
                    <div className='card__header-time'><BiAlarm className="mobile-icon time__icon" /><span>{test.time}</span> </div>
                    <div className='card__button'>Instrucciones</div>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default PostulantHome
