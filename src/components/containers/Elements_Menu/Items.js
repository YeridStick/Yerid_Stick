import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Items(props) {
  const location = useLocation();

  const isActiveLink = () => {
    return location.pathname === props.ruta;
  };

  return (
    <li className={"items"}>
      <NavLink
        exact={true.toString()}
        to={props.ruta}
        className={`link flex ${isActiveLink() ? 'link_active' : ''}`}
      >
        <i className={props.icono}></i>
        <span>{props.text_link}</span>
      </NavLink>
    </li>
  );
}
