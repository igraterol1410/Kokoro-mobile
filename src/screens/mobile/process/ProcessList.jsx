import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';
import { AiOutlinePlus } from "react-icons/ai";

const ProcessList = () => {
  return (
    <>    
    {/* AVISO DE BIENVENIDA */}
      <IntialText text={'Bienvenido a tus procesos Kokoro'} />

    {/* BARRA DE BUSQUEDA */}
    <div className='box__main-input'>
      <Formik
        initialValues={{}}
        validate={(values)=>{}}
        onSubmit={(values)=>{}}     
      >
        {({ values }) => (
          <Form className='process__form'>
            <Field
              type='text'
              className='process__input'
              placeholder='Busca en tus procesos'
              name='processName'
            />
          </Form>
        )}
      </Formik>
      </div>

      {/* MENU DE PROCESOS */}
      <div data-aos='fade-down' className='process__menu-box'>
        <div className='process__menu-item item-active'>Activos ()</div>
        <div className='process__menu-item '>Archivados ()</div>
      </div>

      {/* LISTA DE PROCESOS */}
      <div data-aos='fade-down' className='process__list-item'>
        <div className='process__name'>Nombre de proceso</div>
        <div className='item-info'><Icon className='icon__info' icon="ep:more-filled" /></div>
      </div>
      <div data-aos='fade-down' className='process__list-item'>
        <div className='process__name'>Nombre de proceso</div>
        <div className='item-info'><Icon className='icon__info' icon="ep:more-filled" /></div>
      </div>
      <div data-aos='fade-down' className='process__list-item'>
        <div className='process__name'>Nombre de proceso</div>
        <div className='item-info'><Icon className='icon__info' icon="ep:more-filled" /></div>
      </div>

      {/* BOTON DE CREAR NUEVO PROCESO */}
      <Button className='mobile__button' ><AiOutlinePlus className='button__icon' />   Crear nuevo proceso</Button>

    </>
  )
}

export default ProcessList
