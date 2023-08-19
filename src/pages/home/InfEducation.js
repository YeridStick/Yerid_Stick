import React from 'react';
import '../../styles/InfEducation.css';
import USCO_Negativo from '../../img/Education/USCO_Negativo.png';
import USCO_Positivo from '../../img/Education/USCO_Positivo.png';

import FuntEducation from './FuntEducation';

export default function InfEducation({ isDarkMode, setIsDarkMode }) {
  return (
    <div className='InfoEducation shadow containerflex'>
      <section className="InfoEducation center flex">
        <h2 className="center InfoEducation tittle_am color tittles">
          Educational training
        </h2>
        <div className="flex center marginTop">
          <FuntEducation
            Carrera={"Software development"}
            Fecha={"2021 - 2023"}
            Imagen={isDarkMode ? USCO_Positivo : USCO_Negativo}
          />
        </div>
      </section>
    </div>
  )
}
