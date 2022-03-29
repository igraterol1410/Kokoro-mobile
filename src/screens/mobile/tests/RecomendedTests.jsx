import React, { useEffect, useState } from 'react'
import IntialText from '../components/IntialText'
import { BiAlarm } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineCloseCircle, AiOutlineRight, AiOutlinePlusCircle } from "react-icons/ai";
import { Field, Form, Formik } from 'formik';

const RecomendedTests = () => {
  const [showTest, setShowTest] = useState([])
  const [buttonIcon, setButtonIcon] = useState(0)
  const [mainText, setMainText] = useState('Te recomiendo 3 pruebas')
  const tests = [
    {name:'ICE BarOn', time: '10 mns', button:'card__button button-purple', id: 0},
    {name:'D.I.S.C. Clásico', time: '15 mns', button:'card__button button-blue', id: 1},
    {name:'Wonderlic', time: '30 mns', button:'card__button button-green', id: 2},
]
  
const tests2 = [
    {name:'Raven', time: '10 mns', button:'card__button button-purple', id: 0},
    {name:'B.F.Q.', time: '15 mns', button:'card__button button-blue', id: 1},
    {name:'VALANTI', time: '30 mns', button:'card__button button-green', id: 2},
]

useEffect(()=>{
  setShowTest(tests)
},[])

const handleChangeTests = () => {
  setShowTest(tests2)
  setButtonIcon(1)
}
  return (
    <>
      {/* AVISO DE BIENVENIDA */}
      {
        buttonIcon === 0 || buttonIcon === 2 &&
      <IntialText text={mainText} textClase={''}/>
      }
      {
        buttonIcon === 1 &&
      <div className='box__main-input'>
        <Formik
          initialValues={{}}
          validate={(values)=>{}}
          onSubmit={(values)=>{}}     
        >
          {({ values }) => (
            <Form className='process__form' style={{marginTop:'1rem'}}>
              <Field
                type='text'
                className='process__input'
                placeholder='Busca en tus procesos'
                name='processName'
              />

              <div className='process__input-box' style={{width:'65%', margin:'auto'}}>
                <Field
                      as='select'
                      className='process__form-input'
                      name='processArea'
                    >
                  <option value='1'>Selecciona todas las pruebas</option>
                  <option value='2'>prueba 2</option>
                  <option value='3'>Prueba 3</option>
                </Field>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      }

      {
        showTest && showTest.map((test)=>(
            <div key={test.id} className='card__box' style={{marginTop:'1rem'}}>
                <div className='card__header card__header-flex'>
                  <div className='card__header-name card__title'><h3 className=''></h3>{test.name}</div>
                  <div className='card__header-time'>{buttonIcon === 0 || buttonIcon === 2 ? <AiOutlineCloseCircle className="mobile-icon time__icon" /> : <AiOutlinePlusCircle className="mobile-icon time__icon" />
                  }
                </div>
            </div>
                <div data-aos='fade-down' className='card__header-flex'>
                    <div className='card__header-time'><BiAlarm className="mobile-icon time__icon" /><span>{test.time}</span> </div>
                    <div className={test.button}>Ver detalles</div>
                </div>
            </div>
        ))
    }

{
  buttonIcon === 0 &&
  <>
    {/* BOTON DE AGREGAR MAS PRUEBAS */}
    <button className='mobile__button secundary__button' onClick={()=>{handleChangeTests()}}><AiOutlinePlus className='button__icon' /> <span>Agregar más pruebas</span></button>

    {/* BOTON DE PUBLICAR PROCESO */}
    <button className='mobile__button'><AiOutlineRight className='button__icon' /> <span>Publicar proceso</span></button>
  </>

}

{
  buttonIcon === 1 &&
  <>
    <button onClick={()=>{setButtonIcon(2); setMainText(`tienes ${tests.length} pruebas seleccionadas`)}} className='mobile__button'><AiOutlinePlus className='button__icon' /> <span>Continuar</span></button>
  </>
}
{
  buttonIcon === 2 &&
  <>
    {/* BOTON DE AGREGAR MAS PRUEBAS */}
    <button className='mobile__button secundary__button' onClick={()=>{handleChangeTests()}}><AiOutlinePlus className='button__icon' /> <span>Agregar más pruebas</span></button>

    {/* BOTON DE PUBLICAR PROCESO */}
    <button className='mobile__button'><AiOutlineRight className='button__icon' /> <span>Publicar proceso</span></button>
  </>
}
    </>
  )
}

export default RecomendedTests
