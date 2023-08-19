import React from 'react'

//Importamos las imagenes 
import Logo from '../../../img/Mi logo color.webp'

export default function LogoMenu({Icon_lock_menu, lock_menu, close_menu, isDarkMode}) {
  //console.log(isDarkMode);
  //setIsDarkMode
  return (
    <div className="logo_items flex">
      <div className="nav_image">
        <img src= {Logo} alt="logo" />
      </div>
      <span className="logo_name" translate="no">erid-Stick</span>
      <i className={`bx ${Icon_lock_menu}`} id="lock-icon" onClick={lock_menu}></i>
      <i className='bx bx-x' id="sidebar-close" onClick={close_menu}></i>
    </div>
  ) 
}
