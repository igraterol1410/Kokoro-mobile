import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';

const company = () => {
  return (
    <>
    {/* AVISO DE BIENVENIDA */}
    <IntialText text={'Cuéntame sobre tu empresa'}/>

    {/* FORMULARIO DE EMPRESA */}
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
                  name='companyName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">RUT</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='companyRut'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Número de trabajadores</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='companyEmployees'
                />
              </div>
            </div>

            {/* BOTON DE SUBIR LOGO */}
            <Button className='mobile__button secundary__button'><Icon icon="ant-design:upload-outlined" />  <span>Subir logo</span></Button>
            
            {/* BOTON DE CONTINUAR */}
            <Button className='mobile__button'><Icon icon="fluent:send-28-filled" /> <span>Continuar</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default company
