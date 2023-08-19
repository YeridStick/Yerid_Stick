import React, { useEffect, useState } from 'react'

//Import multimedia
import Profile_foto from '../../../img/Profile/Profile_reducida.webp';

export default function NavBar({open_menu, isDarkMode}) {
  //Abrir cuadro de texto
  const [OpenInput, Setopeninput] = useState(true);
  const open_search = () =>{
    Setopeninput(!OpenInput);
  } 

  return (
    <nav className={`flex ${OpenInput ? "navbar_hiden" : "navbar"} ${isDarkMode ? "dark" : "clear"}`}>
      <i className="bx bx-menu" id="sidebar-open" onClick={open_menu}></i>
      {/*<input type="text" placeholder="Search..." className={`search-box ${OpenInput ? "Desaparecer" : ""}`} name="buscar"/>*/}
      <img id="navbar-image-profile-image" className={`${OpenInput ? "Desaparecer" : ""}`} src={Profile_foto} alt="Foto_Yerid"></img>
      {/*<i className='bx bx-search' id="search-open" onClick={open_search}></i>*/}
    </nav>
  )
}
