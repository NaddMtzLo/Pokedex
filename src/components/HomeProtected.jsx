import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const HomeProtected = () => {
    const trainersName = useSelector(state => state.trainersName)
    if (trainersName) {
        return <Navigate to="/pokedex"/>
    } else {
            return <Outlet/>
        }
    }


export default HomeProtected
