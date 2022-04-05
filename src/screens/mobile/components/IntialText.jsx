import React from 'react'

const IntialText = ({text, textClase}) => {
  return (
    <>
    {/* <div className='triangle__text'></div> */}
    <div className='process__text-box'>
      <p className={textClase ? textClase :'process__main-text'}>{text}</p>
    </div>
    </>
  )
}

export default IntialText
