import React from 'react'

import ItemsExternos from './ItemsExternos';
import Items from './Items';
import SidebarProfile from './SidebarProfile';

export default function MenuItem({Icon_tema, isDarkMode, setIsDarkMode}) {
	const DarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // Almacenar el estado de isDarkMode en el localStorage
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
  };

  return (
    <ul className='menu-iten'>
      <div className="menu-title">
				{/*Titulo*/}
        <span id='title' className="title">Dashboard</span>
        <div id="line"></div>
				{/*Enlaces de menu*/}
				<Items ruta = {"/Yerid_Stick/"} icono = {'bx bx-home'} text_link = {"Home"}/>
				<Items ruta = {"/Projects"} icono = {'bx bx-folder'} text_link = {"Projects"}/>
				<Items ruta = {"/About"} icono = {'bx bx-info-circle'} text_link = {"About"}/>

				{/*Titulo*/}
        <span id='title' className="title">Setting</span>
				<div id="line"></div>
				
				{/*Tema de color */}
				<li className={`bottum_tema ${isDarkMode ? "bottum_tema-dark" : "bottum_tema"}`} onClick={DarkMode}>
					<i className={`${Icon_tema} Tema_position flex`}></i>
					<span className={`${isDarkMode ? "none_tex" : "Tex_tema"}`}>clear mode</span>
					<span className={`${isDarkMode ? "Tex_tema" : "none_tex"}`}>dark mode</span>
				</li>
				{/*Tema de color 
				<Items ruta = {"/Setting"} icono = {"bx bx-cog"} text_link = {"Setting"} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
				<Items ruta = {"/Notice_board"} icono = {"bx bx-flag"} text_link = {"Notice board"}/>
				*/}
				{/*<Items ruta = {"/Awards"} icono = {"bx bx-award"} text_link = {"Awards"}/>*/}
				{/*Info Contacto*/}
				<span className="title">Networks</span>
				<div id="line"></div>

        {/*Rutas externas */}
        <ItemsExternos ruta = {"https://github.com/YeridStick"} icono = {"bx bxl-github"} text_link = {"Github"}/>
				<ItemsExternos ruta = {"https://www.linkedin.com/in/yerid-stick-ramirez-guzman/"} icono = {"bx bxl-linkedin"} text_link = {"linkedin"}/>
        {/*Rutas externas */}
				<div id="line"></div>
				<span id='title_contact' className="title">Contact</span>
				<SidebarProfile isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
				<div id="line"></div>
      </div>
    </ul>
  )
}
