import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';

const About = () => {
  return (
    <>
    {/* AVISO DE BIENVENIDA */}
    <IntialText text={'Cuéntame sobre ti'}/>

    {/* FORMULARIO DE USUARIO */}
    <Formik
        initialValues={{}}
        validate={(values)=>{
        }}
        onSubmit={(values)=>{}}     
      >
        {({ values }) => (
          <Form >
            <div className='process__form process__box'>
              <div className=''>
              <label className="process__label">Nombre</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='userName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Apellido</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='userLastName'
                />
              </div>
              
              <div data-aos='fade-down' className='process__input-box'>
                    <label className="process__label">Selecciona un país</label>
                    <Field
                      as='select'
                      className='process__form-input'
                      name='processArea'
                    >
                      <option value='1'>País 1</option>
                      <option value='2'>País 2</option>
                      <option value='3'>País 3</option>
                    </Field>
                  </div>
            </div>
            
            {/* BOTON DE CONTINUAR */}
            <Button className='mobile__button'><Icon icon="fluent:send-28-filled" /> <span>Continuar</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default About
