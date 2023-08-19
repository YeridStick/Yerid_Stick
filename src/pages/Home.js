import React, { lazy, Suspense } from "react";

import "../styles/Pages.css"
import My_foto from "../img/Profile/YeridStick.webp"
import HomeInfo from "./home/HomeInfo";
import Skills from "./home/Skills";

import '../styles/Home.css'
import InfEducation from "./home/InfEducation";
const LazyFooter = lazy(() => import('./home/Footer'));

export default function Home({ isDarkMode, setIsDarkMode }) {
  return(
    <main className="widthHome container_main_pages flex_wrap padding flex">
      <div className="flex flex_wrap center width100">
        <div className="flex flex_wrap center width100 shadow margin padding">
          <div className="container_madia">
            <img id="imege_pages" className="position_foto" src={My_foto}  alt="Foto Yerid_Stick"/>
          </div>
          <div className="containert_tittles flex">
            <HomeInfo/>
          </div>
        </div>
      </div>
      <section className="containerElementInfo margin center width100 flex flex_wrap">
        <div className="center flex flex_wrap shadow">
          <div className="flex"><Skills/></div>
          <div className="flex">
            <InfEducation 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <section className="width100 center flex PosicionFixe">
          <LazyFooter />
        </section>
      </Suspense>
    </main>
  );
}