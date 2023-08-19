import React from 'react'

export default function FuntEducation({Carrera, Fecha, Imagen }) {
  return (
    <div className="width100 Descripcion flex center">
      <div className="width100 flex center flex_wrap column">
        <span className="marginLeft carrera center">
          {Carrera}
        </span>
        <i className="marginLeft Fecha">{Fecha}</i>
      </div>
      <div className="DescIcon">
        <img className='Imagen' src={Imagen} alt='Estudio'/>
      </div>
    </div>
  )
}
