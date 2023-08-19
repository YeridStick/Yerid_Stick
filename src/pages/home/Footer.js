import React from 'react'

import '../../styles/Footer.css'
import LinkFooter from './LinkFooter'
import TextLinkFooter from './TextLinkFooter'
export default function Footer() {
  return (
    <footer className='footer width100 flex center flex_wrap shadow padding'>
      <div className='LinkFooter width100 flex flex_wrap center'>
        <LinkFooter/>
        <TextLinkFooter/>
      </div>
    </footer>
  )
}
