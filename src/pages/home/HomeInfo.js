import React from 'react'
import MyComponent from '../container/MyComponent';
import HomeParrafo from './HomeParrafo';


export default function HomeInfo() {
  return (
    <div className='containerinfohome'>
      <h1 className='tittles_name' translate="no">Yerid Stick Ramirez Guzman</h1>
      <section className="tittles">
        <h2 className="tittle_am">Soy un</h2>
        <h2 className="color tittle">
          <MyComponent 
            text={
              `desarrollador front-end. , diseñador grafico`
            }/>
        </h2>
      </section>
      <div className="center flex"><div id="line" className="W"></div></div>
        <HomeParrafo
          Text_parrafo={
            "Me dedico al desarrollo web. Con la convicción de que todo se puede lograr con constancia y esfuerzo. Estoy iniciando mi andadura en este apasionante campo. Me gusta aprender y me esfuerzo continuamente por mejorar cada día."
          }
        />
    </div>
  )
}
