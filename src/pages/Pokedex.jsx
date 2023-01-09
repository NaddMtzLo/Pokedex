import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonsList from '../components/PokemonsList'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])

  const trainersName = useSelector(state => state.trainersName)

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1154"
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])
  

  return (
    <main>
      <header>
        <h1>Pokédex</h1>
        <p>Welcome <span>{trainersName}</span>!, here you can find your favorite pokemon</p>
      
      </header>
      <PokemonsList pokemons={pokemons}/>
    </main>
  )
}

export default Pokedex