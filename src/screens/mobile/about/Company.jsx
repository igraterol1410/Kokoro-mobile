import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';
import { IoSend } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";


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
            <Button className='mobile__button secundary__button'><AiOutlineUpload className='button__icon' />  <span>Subir logo</span></Button>
            
            {/* BOTON DE CONTINUAR */}
            <Button className='mobile__button'><IoSend className='button__icon' /> <span>Continuar</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default company
