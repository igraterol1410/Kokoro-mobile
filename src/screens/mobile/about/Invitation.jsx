import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';

const Invitation = () => {
  return (
    <>
    {/* AVISO DE BIENVENIDA */}
    <IntialText text={'Invita postulantes a tu proceso'}/>

    {/* SELECCION DE CARGA */}
    <div data-aos='fade-down' className='process__menu-box'>
        <div className='process__menu-item item-active'>Carga Manual</div>
        <div className='process__menu-item '>Carga masiva</div>
      </div>

    {/* FORMULARIO PRINCIPAL */}
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
                  name='postulantName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Apellido</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='postulantLastName'
                />
              </div>
              
              <div className='form__input-section'>
              <label className="process__label">Email</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='postulantEmail'
                />
              </div>
            </div>

            {/* BOTON DE INVITAR */}
            <Button className='mobile__button'><Icon icon="fluent:send-28-filled" /> <span>Invitar postulante</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Invitation
