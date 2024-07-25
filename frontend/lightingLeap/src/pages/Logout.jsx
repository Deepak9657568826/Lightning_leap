import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchLogout } from '../redux/actioncreator'

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
     dispatch(fetchLogout(navigate))
    }, [])


    return (
        <div className="logout-container">
            <h2>Logging you out...</h2>
        </div>
    )
}

export default Logout
