import React from 'react'

const IntialText = ({text, textClase}) => {
  return (
    <div className='process__text-box'>
      <p className={textClase ? textClase :'process__main-text'}>{text}</p>
    </div>
  )
}

export default IntialText
