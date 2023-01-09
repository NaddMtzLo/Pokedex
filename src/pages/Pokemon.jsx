import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState()

  const {id} = useParams()

  const getPercentBarProgress = (valueStat) => {
    const maxValue = 150
      return `${(valueStat * 100) / maxValue}%`
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
  }, [])
  
  console.log(dataPokemon)

  return (
    <main className='Pokemon'>
      <section className='pokemonId'>
        <section className={`pokemonId_header bg-lg-${dataPokemon?.types[0].type.name}`}></section>
        <img className='pokemonId_img' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h3 className='pokemonId_id'># {dataPokemon?.id}</h3>
        <h2 className='pokemonId_name'>{dataPokemon?.name}</h2>
        <div className='pokemonId_features'>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature-name'>Weight</p>
            <p className='pokemonId_feature-value'>{dataPokemon?.weight}</p>
          </div>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature-name'>Height</p>
            <p className='pokemonId_feature-value'>{dataPokemon?.height}</p>
          </div>
        </div>
      
        <section className='pokemonId_info'>
          <div className='pokemonId_info-container'>
            <h4 className='pokemonId_info-title'>Types</h4>
            <div className='pokemonId_info-data'>
              {
                dataPokemon?.types.map(type => <p className= {`pokemonId_info-value bg-${type.type.name}`} key={type.type.name}>
                  {type.type.name}</p>)
              }
            </div>
          </div>
          <div className='pokemonId_info-container'>
            <h4 className='pokemonId_info-title'>Abilities</h4>
            <div className='pokemonId_info-data'>
              {
                dataPokemon?.abilities.map(ability => <p className='pokemonId_info-value' key={ability.ability.name}>
                  {ability.ability.name}</p>)
              }
            </div>
          </div>
        </section>
        <section className='pokemonId_stats'>
          <h3 className='pokemonId_stats-title'>Stats</h3>
          <div className='pokemonId_stats-container'>
            {}
            {
              dataPokemon?.stats.map(stat => (
                <div className='pokemonId_stat'>
                  <div className='pokemonId_stat-header'>
                    <p className='pokemonId_stat-name'>{stat.stat.name}</p>
                    <p className='pokemonId_stat-value'>{stat.base_stat}</p>
                  </div>
                  <div className='pokemonId_stat-bar'>
                    <div style={{width: getPercentBarProgress(stat.base_stat)}} className='pokemonId_stat-barProgress'></div>
                  </div>
                </div>
              ))
            } 
          </div>
        </section>
      </section>  
    </main>
  )
}


export default Pokemon