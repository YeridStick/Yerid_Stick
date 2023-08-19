import React, { useEffect, useState } from 'react'

//Elements_Menu
import LogoMenu from './Elements_Menu/LogoMenu'
import MenuItem from './Elements_Menu/MenuItem'
import NavBar from './Elements_Menu/NavBar'

export default function Menu({ locked, setLocked, isDarkMode, setIsDarkMode }) {
  const [Show_icon, Setshow_icon] = useState(true);
  const [Icon_lock, Seticon_lock] = useState(true);
  const [sidebar, setsidebar] = useState(true);

  //Vigila el estado de los valore 
  useEffect(()=>{
    if(sidebar === false){ 
      if(window.innerWidth <= 900){
        setLocked(true);
        Seticon_lock(false)
        Setshow_icon(false);
      }else{
        setLocked(false);
        Setshow_icon(true);
      }
    }else{
      Setshow_icon(true);
    }
  },[sidebar, locked])
  const open_menu = () => {
    if (window.innerWidth <= 900) {
      setsidebar(false);
    } else {
      setsidebar(true);
    }
  };

  const close_menu = () => {
    if (window.innerWidth <= 900) {
      setsidebar(true);
    } else {
      setsidebar(true);
    }
  };

  const lock_menu = () => {
    setLocked(!locked);
    Seticon_lock(!Icon_lock);
  };

  return (
    <div>
      <nav 
        id='Sidebar_NaVbar'
        className={`${sidebar ? "sidebar" : "sidebar_responsive"} ${isDarkMode ? "dark" : "clear"} ${locked ? "locked" : ""}`}
      >
        <LogoMenu
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          Icon_lock_menu={`${ Show_icon ? ( Icon_lock ? " bx-lock-open-alt" : "bx-lock-alt") : "" }`}
          lock_menu={lock_menu}
          close_menu={close_menu}
        />

        <div className="menu-container">
          <div className="menu-itens">
            <MenuItem
              Icon_tema={`${isDarkMode ? "bx bx-moon Moon" : "bx bx-sun Sun"}`}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        </div>
      </nav>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} open_menu={open_menu} />
    </div>
  )
}
