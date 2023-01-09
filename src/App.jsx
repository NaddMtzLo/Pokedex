import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import HomeProtected from './components/HomeProtected'
import Footer from './Layout/Footer'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected />}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<Pokemon/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
