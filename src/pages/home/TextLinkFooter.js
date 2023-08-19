import React from 'react'

export default function TextLinkFooter() {
  return (
    <p>&copy; {new Date().getFullYear()} 
      <b className='bSintraducir' translate='no'>
        Yerid-Stick.
      </b> 
      All rights reserved.
    </p>
  )
}
