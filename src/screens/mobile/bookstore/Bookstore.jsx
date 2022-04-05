import { Field, Form, Formik } from 'formik'
import React from 'react'
import { BiAlarm } from "react-icons/bi";

const Bookstore = () => {
    const tests = [
        {name:'Raven', time: '10 mns', button:'card__button button-purple', id: 0},
        {name:'B.F.Q.', time: '15 mns', button:'card__button button-blue', id: 1},
        {name:'VALANTI', time: '30 mns', button:'card__button button-green', id: 2},
    ]
  return (
    <>
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
                placeholder='Busca una prueba'
                name='processName'
              />

              <div className='process__input-box' style={{width:'65%', margin:'auto'}}>
                <Field
                      as='select'
                      className='process__form-input'
                      name='processArea'
                    >
                  <option value='1'>Mostrar todas las pruebas</option>
                  <option value='2'>prueba 2</option>
                  <option value='3'>Prueba 3</option>
                </Field>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {
        tests && tests.map((test)=>(
            <div key={test.id} className='card__box' style={{marginTop:'1rem'}}>
                <div className='card__header card__header-flex'>
                  <div className='card__header-name card__title'><h3 className=''></h3>{test.name}</div>
                  <div className='card__header-time'>
                </div>
            </div>
                <div data-aos='fade-down' className='card__header-flex'>
                    <div className='card__header-time'><BiAlarm className="mobile-icon time__icon" /><span>{test.time}</span> </div>
                    <div className={test.button}>Ver detalles</div>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default Bookstore
