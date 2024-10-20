import { useState } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import { BrowserRouter,Route,Routes, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
        path='/services'
        element={<Services/>}
        ></Route>
        <Route
        path='/packages'
        element={<Packages/>}
        ></Route>
        <Route
        path='/contact'
        element={<Contact/>}
        ></Route>
        <Route
        path='/appointment'
        element={<Appointment/>}
        ></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
