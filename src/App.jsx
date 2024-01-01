import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Landingpage } from './pages/Landingpage'
import { Login } from './pages/Login'
import { Signup } from './pages/Singup'
import { Dashboard } from './pages/Dashboard'
import { Questions } from './components/Dbcomponents/Questions'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Landingpage/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Signup/>} path='/signup'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<Questions/>} path='/questions'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
