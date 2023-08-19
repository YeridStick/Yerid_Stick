import React from 'react'

export default function ItemsExternos(props) {
  
  return (
    
    <div className={"items"}>
      <a
        target="_blank" 
        rel="noopener noreferrer"
        href={props.ruta}
        className={`flex link`}
      >
        <i className={props.icono}></i>
        <span id='span_link'>{props.text_link}</span>
      </a>
    </div>
  )
}
