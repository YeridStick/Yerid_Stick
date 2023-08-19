import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Skills.css';

export default function Skills() {
  const [progressPercentage, setProgressPercentage] = useState(0); // Estado para el porcentaje de la barra

  useEffect(()=>{
    ContReact();
  },[]);

  const ContReact = () => {
    setProgressPercentage(70); // Actualiza el porcentaje al cambiar al elemento React
  }
  const ContNode = () => {
    setProgressPercentage(40); // Actualiza el porcentaje al cambiar al elemento Node
  }
  const ContSQL = () => {
    setProgressPercentage(20); // Actualiza el porcentaje al cambiar al elemento MySQL
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };

  const sliderRef = React.useRef(null);

  const handleItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className='ContainerHard'>
      <div className='flex center containerflex'>
        <div className='containerskills flex shadow'>
          <section className="tittles">
            <h2 className="color tittle">Skills</h2>
          </section>
          <div className='menor300 flex'>
            <div className='flex'>
              <div className='LineSkills'></div>
              <ul className='Listhard'>
                <li className='Element' onClick={() => handleItemClick(0)}>React</li>
                <li className='Element' onClick={() => handleItemClick(1)}>Node</li>
                <li className='Element' onClick={() => handleItemClick(2)}>MySQL</li>
                <li className='Element' onClick={() => handleItemClick(3)}>CSS</li>
                <li className='Element' onClick={() => handleItemClick(4)}>HTML5</li>
                {/* Agrega más elementos si es necesario */}
              </ul>
            </div>
          </div>
        </div>
        <div className='shadow Slider'>
          <Slider {...settings} ref={sliderRef}>
            <div className="color tittle Element " onClick={ContReact}>
              <i className='bx bxl-react icon'></i>
            </div>
            <div className="color tittle Element " onClick={ContNode}>
              <i className='bx bxl-nodejs icon'></i>
            </div>
            <div className="color tittle Element " onClick={ContSQL}>
              <i className='bx bxs-data icon'></i>
            </div>
            <div className="color tittle Element ">
              <i className='bx bxl-css3 icon'></i>
            </div>
            <div className="color tittle Element ">
              <i className='bx bxl-html5 icon'></i>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
