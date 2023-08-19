import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
//Pages
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import About from '../pages/About'
import NewProjects from '../pages/NewProjects'
//import Allprojects from '../pages/Allprojects'
import Setting from '../pages/Setting'
import NoticeBoard from '../pages/NoticeBoard'
//import Awards from '../pages/Awards'
//Sidebar
import Menu from './containers/Menu'



export default function Rutas({ locked, setLocked, isDarkMode, setIsDarkMode }) {

  return (
    <Router>
      <Menu locked={locked} setLocked={setLocked} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Routes>
        {/*<Route exact path={"/Awards"} Component={Awards}/>*/}
        <Route exact path={"/Notice_board"} Component={NoticeBoard}/>
        <Route exact path={"/Setting"} Component={Setting}/>
        <Route exact path={"/Projects"} Component={NewProjects}/>
        <Route exact path={"/About"} Component={About}/>
        <Route exact path={"/Yerid_Stick"} element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}/>
        <Route path={"*"} element={<Error404 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}/>
      </Routes>
    </Router>
  )
}
