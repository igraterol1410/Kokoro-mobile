import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';

const ShareReport = () => {
  return (
    <>
    {/* AVISO DE BIENVENIDA */}
    <IntialText text={'Comparte el reporte por correo'} textClase={''}/>

    {/* FORMULARIO DE REPORTE */}
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
                  name='reportName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Apellido</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='reportLastName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Email</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='reportEmail'
                />
              </div>
            </div>

            {/* BOTON DE INVITAR */}
            <Button className='mobile__button'><Icon icon="fluent:send-28-filled" /> <span>Enviar reporte</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default ShareReport
