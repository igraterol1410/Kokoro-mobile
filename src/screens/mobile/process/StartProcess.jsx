import React from 'react'
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import IntialText from '../components/IntialText';

const StartProcess = () => {
  return (
    <>
    {/* AVISO DE BIENVENIDA */}
    <IntialText text={'Comienza tu nuevo proceso'} textClase={''}/>

    {/* BARRA DE BUSQUEDA */}
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
              <label className="process__label">Nombra tu proceso</label>
                <Field
                  type='text'
                  className='process__form-input'
                  name='processName'
                />
              </div>

              <div className='process__input-box'>
              <label className="process__label">Selecciona un perfil</label>
                <Field
                  as='select'
                  className='process__form-input'
                  name='processType'
                >
                  <option>Opciones</option>
                  <option>Opcion 1</option>
                  <option>Opcion 2</option>
                  <option>Opcion 3</option>
                </Field>
              </div>

              {
                values?.processType && values?.processType != 'Opciones'  &&
                <>
                  <div data-aos='fade-down' className='process__input-box'>
                    <label className="process__label">Selecciona un área</label>
                    <Field
                      as='select'
                      className='process__form-input'
                      name='processArea'
                    >
                      <option value='0'>Áreas</option>
                      <option value='1'>Area 1</option>
                      <option value='2'>Area 2</option>
                      <option value='3'>Area 3</option>
                    </Field>
                  </div>
                  
                  <div data-aos='fade-down' className='process__input-box'>
                    <label className="process__label">selecciona una jerarquía</label>
                    <Field
                      as='select'
                      className='process__form-input'
                      name='processRank'
                    >
                      <option value='0'>Jerarquías</option>
                      <option value='1'>Jerarquía 1</option>
                      <option value='2'>Jerarquía 2</option>
                      <option value='3'>Jerarquía 3</option>
                    </Field>
                  </div>
                </>

            }
            </div>

            {/* BOTON DE CONTINUAR */}
            <Button className='mobile__button'><Icon className='' icon="ic:outline-navigate-next" /> <span>Crear nuevo proceso</span></Button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default StartProcess
