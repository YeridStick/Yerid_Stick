import React from 'react'

export default function TextLinkFooter() {
  return (
    <p className='flex flex_wrap'>&copy; {new Date().getFullYear()} 
      <b className='bSintraducir' translate='no'>
        Yerid-Stick.
      </b> 
      Todos los derechos reservados 
    </p>
  )
}
