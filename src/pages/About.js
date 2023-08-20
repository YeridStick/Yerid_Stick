import React, { lazy, Suspense } from "react";
import My_Logo from "../img/Mi logo color.webp"
import My_foto from "../img/Profile/Profile_reducida.webp"
import "../styles/About.css";
import ItemsExternos from "../components/containers/Elements_Menu/ItemsExternos";

const FooterLazy = lazy(() => import("../pages/home/Footer"))

function About() {
  return(
    <main className="widthHome About Project container_main_pages flex_wrap flex">
      <div className="containerAbout flex flex_wrap center width100 shadow margin padding">
        <div className="flex containerFotoAbout">
          <div className=" flex center width100 shadow">
            <img id="fotoAbout" src={My_Logo} alt="Logo_YeridStick"/>
          </div>
          <i className='bx bx-chevron-right'></i>
          <div className="flex center width100 shadow">
            <img id="fotoAbout" className="borderRadiosAbout" src={My_foto} alt="Foto de YeridStick"/>
          </div>
        </div>
        <div id="line" className="margin"></div>
        
        <div className="width100 flex flex_wrap center shadow">
          <div className="width100 flex flex_wrap center shadow margin">
            <p className="flex flex_wrap padding ">
              <span className="width100">
                Mi nombre es <b translate="no">Yerid Stick Ramírez Guzmán</b>
              </span> 
              <span className="width100">
                Este es mi portafolio web, base de conocimientos y enfoques que tengo en este momento. <i id="Fecha">07/19/2023</i> 
              </span>
              <div className='center shadow flex padding margin'>
                <div id="AboutIcon">
                  <ItemsExternos
                    ruta={"https://es.react.dev/"}
                    icono={"bx bxl-react"}
                    text_link={"Este proyecto está hecho en React.js: Ir a documentacion"}
                  />
                </div>
              </div>

              <div className="width100">
                <p className="width100">- Actualmente vivo en Neiva - Huila Colombiaa</p>
                <p className="width100">- Nací el 9 de diciembre de 2003 </p>
                <p className="width100">- Estudiante de la universidad surcolombiana</p>
                <p className="width100">- Entusiasta del autoaprendizaje :)</p>
              </div>
            </p>
          </div>
          <div className="width100 flex flex_wrap center shadow margin">
            <h3 className="width100 flex flex_wrap center margin padding">Contactame</h3>
          </div>
          <i class='bx bx-chevron-down' ></i>
          <div className="width100 flex flex_wrap center shadow margin">
            <div className='width100 flex center flex_wrap shadow padding'>
              <div className='LinkFooter width100 flex center'>
                <div id="linkabout">
                  <ItemsExternos
                    ruta={"mailto:yeridstick3000@gmail.com"}
                    icono={"bx bxl-gmail"}
                    text_link={"yeridstick3000@gmail.com"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Suspense fallback={<div className="width100 center flex shadow margin padding"></div>}>
          <section className="width100 center flex PosicionFixe">
            <FooterLazy/>
          </section>
      </Suspense>
    </main>
  );
}

export default About;