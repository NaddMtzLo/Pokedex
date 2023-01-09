import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const trainersName = useSelector(state => state.trainersName)
    if (trainersName) {
        return <Outlet/>
    } else {
        return <Navigate to="/"/>
        }
    }


export default ProtectedRoutes