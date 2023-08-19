import React from 'react'
import MyComponent from '../container/MyComponent';
import HomeParrafo from './HomeParrafo';


export default function HomeInfo() {
  return (
    <div className='containerinfohome'>
      <h1 className='tittles_name' translate="no">Yerid Stick Ramirez Guzman</h1>
      <section className="tittles">
        <h2 className="tittle_am">I am a</h2>
        <h2 className="color tittle">
          <MyComponent 
            text={
              `front-end developer. , graphic designer`
            }/>
        </h2>
      </section>
      <div className="center flex"><div id="line" className="W"></div></div>
        <HomeParrafo
          Text_parrafo={
            "I am dedicated to web development. With the conviction that everything can be achieved with perseverance and effort. I live in Neiva Huila, Colombia, I am beginning my journey in this exciting field. I like to learn and I continually strive to improve every day."
          }
        />
    </div>
  )
}
