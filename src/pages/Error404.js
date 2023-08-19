import React from "react";
import Loading from "../components/Loading";
import Lottie from 'lottie-react';
import animationDataDark from '../img/Pages/lottieflow-404-12-7-000000-easey.json'
import anumationDataClear from '../img/Pages/lottieflow-404-12-7-ffffff-easey.json'
//importar css
import "../styles/Pages.css"
import "../styles/Error.css"

export default function Error404({ isDarkMode, setIsDarkMode }) {
  return(
    <main className="widthHome width100 container_main_pages shadow flex">
      <div className="flex flex_wrap center width100 margin padding">
        <h1 className=" flex flex_wrap center width100 margin padding">Error</h1>
        <div className="container_element_Error">
          <Lottie className="smallAnimation margin padding" animationData={isDarkMode ? anumationDataClear : animationDataDark} />
        </div>
      </div>
      <div>
        <Loading/>
      </div>
    </main>
  );
}