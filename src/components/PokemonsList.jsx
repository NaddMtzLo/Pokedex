import React from 'react'
import PokemonCard from './PokemonCard'
import "./styles/PokemonsList.css"

const PokemonsList = ({pokemons}) => {
  return (
    <section className='pokemonsList'>
        {
            pokemons?.map((pokemon) => <PokemonCard key={pokemon.url} pokemon={pokemon}/> )
        }
    </section>
  )
}

export default PokemonsList