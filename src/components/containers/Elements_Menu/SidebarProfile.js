import React from 'react'
import Profile_img from '../../../img/Profile/Profile_reducida.webp'

export default function SidebarProfile() {
  return (
    <div className="profile-items flex">
      <div className="nav-image">
        <img id="imege_profile" src={Profile_img} alt="Foto_Yerid"/>
      </div>
      <div className="data-text flex">
        <em id="name" translate="no">Yerid Stick R</em>
        <em id="email">yeridstick3000@gmail.com</em>
      </div>
    </div>
  )
}
