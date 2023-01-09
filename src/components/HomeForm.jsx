import React from 'react'
import { useDispatch } from 'react-redux'
import { setGlobalTrainersName } from '../store/slices/trainersName.slice'
import "./styles/HomeForm.css"

const HomeForm = () => {

  const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      const trainersName = e.target.trainersName.value.trim()
      dispatch(setGlobalTrainersName(trainersName))
    }

  return (
    <form className='home_form' onSubmit={handleSubmit}>
        <input required className='home_input' type="text" id='trainersName' placeholder='Your name'/>
        <button className='home_btn'>Start</button>
    </form>
  )
}


export default HomeForm