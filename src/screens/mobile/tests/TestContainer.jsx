import React, { useEffect, useState } from 'react';
import IntialText from '../components/IntialText';
import { AiOutlineRight } from "react-icons/ai";

const TestContainer = () => {
    const [question, setQuestion] = useState('')
    const [optionSelected, setOptionSelected] = useState('')
    const multipleOption = []
    const options = [
        {answer:'Respuesta 1', id:'0'},
        {answer:'Respuesta 2', id:'1'},
        {answer:'Respuesta 3', id:'2'},
        {answer:'Respuesta 4', id:'3'},
    ]

    useEffect(()=>{
        setQuestion('¿Pregunta 1?')
    },[])

    const handleSelect = (option) => {
        setOptionSelected(option.id)
        multipleOption.push(...multipleOption, option.id)
        console.log(multipleOption)
        getClase(option)
    }

    const getClase = (option) => {
        if(multipleOption.length > 0){
            let findOption = multipleOption.filter((eachOption) => (eachOption === option.id))
            return 'test__option option__selected'
        }else{
            return 'test__option'
        }
    }

  return (
    <>
      {/* AVISO DE BIENVENIDA */}
      <IntialText text={question} textClase={''}/>

        {
            options && options.map((option)=>(
                <div key={option.id} className={option.id === optionSelected ? 'test__option option__selected' : 'test__option'} onClick={()=>handleSelect(option)}><span className='test__option-text'>{option?.answer}</span></div>
            ))
        }

      {/* BOTON DE COMENZAR PRUEBA */}
      <button className='mobile__button'><AiOutlineRight className='button__icon' /> <span>Continuar</span></button>
    </>
  )
}

export default TestContainer
