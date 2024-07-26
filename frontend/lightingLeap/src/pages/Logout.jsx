import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchLogout } from '../redux/actioncreator'
import './LogoutPage.css';

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLogout(navigate))
    }, [])

    function handlaNavigation() {
        navigate("/")
    }


    return (
        <div className="logout-container">
            <div className="logout-card">
                <h1 className="logout-message">User logged out successfully</h1>
                <button onClick={handlaNavigation} className="login-button">
                    Click here to login
                </button>
            </div>
        </div>
    )
}

export default Logout




