import React from 'react'
import HomeForm from '../components/HomeForm'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>
      <img className='home_img' src="/images/pokedex.png" alt="Pokédex" />
      <h2 className='home_subtitle'>Hi, trainer!</h2>
      <p className='home_text'>Introduce your name to start</p>
    <HomeForm/>
    </main>
  )
}

export default Home