import React from 'react'
import ItemsExternos from '../../components/containers/Elements_Menu/ItemsExternos'

export default function LinkFooter() {
  return (
    <div className='width100 flex center'>
      <ItemsExternos
        ruta={"https://www.instagram.com/yeridstick/?hl=es-es"}
        icono={"bx bxl-instagram"}
        text_link={"Instagram"}
      />
      <ItemsExternos 
        ruta = {"https://github.com/YeridStick"} 
        icono = {"bx bxl-github"} 
        text_link = {"Github"}
      />
      <ItemsExternos 
        ruta = {"https://www.linkedin.com/in/yerid-stick-ramirez-guzman/"} 
        icono = {"bx bxl-linkedin"} 
        text_link = {"linkedin"}
      />
    </div>
  )
}
