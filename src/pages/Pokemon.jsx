import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

  const {id} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type/${id}/`
    axios.get(URL)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  

  return (
    <main>
      pokemon {id}
      <section className='pokemonId'>
        <section className='pokemonId_header'></section>
        <img className='pokemonId_img' src="" alt="" />
        <h3 className='pokemonId_id'>#</h3>
        <h2 className='pokemonId_name'></h2>
        <div className='pokemonId_features'>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature-name'>Weight</p>
            <p className='pokemonId_feature-value'></p>
          </div>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature-name'>Height</p>
            <p className='pokemonId_feature-value'></p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Pokemon