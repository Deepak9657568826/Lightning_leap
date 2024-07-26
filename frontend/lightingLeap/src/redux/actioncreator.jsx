import { FETCH_INDIVIDUAL_DATA_FAILURE, FETCH_INDIVIDUAL_DATA_LOADING, FETCH_INDIVIDUAL_DATA_SUCCESS, FETCHDATA_FAILURE, FETCHDATA_LOADING, FETCHDATA_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS } from "./actiontype"
import axios from "axios";

// login
const loginUrl = "https://lightning-leap-10.onrender.com/login";

export const fetchLogin = (data, navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_LOADING })
        try {
            const response = await axios.post(loginUrl, data)
            console.log(response.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            if (response.data.Message == "Login successfull") {
                localStorage.setItem("token", response.data.token)
                alert(`${response.data.Message}`)
                navigate("/homepage")
            }
            else{
                alert(`${response.data.Message}`)
            }


        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message })
        }
    }
}

const logoutUrl = "https://lightning-leap-10.onrender.com/logout";

export const fetchLogout = (navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT_LOADING })
        try {
            const response = await axios.get(logoutUrl)
            console.log(response.data);
            if (response.data) {
                localStorage.removeItem("token")
            }
            dispatch({ type: LOGOUT_SUCCESS, payload: response.data })
            // alert(`${response.data.Message}`)
        } catch (error) {
            dispatch({ type: LOGOUT_FAILURE, payload: error.message })
        }
    }
}









// get blog data
const blogUrl = "https://lightning-leap-10.onrender.com/blog";

export const getBlockData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCHDATA_LOADING })
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(blogUrl, {
                headers: {
                    token
                }
            })
            dispatch({ type: FETCHDATA_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCHDATA_FAILURE, payload: error.message })
        }
    }
}




// get blog data
const individualblogUrl = "https://lightning-leap-10.onrender.com/individualblog";

export const getIndividualBlockData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_INDIVIDUAL_DATA_LOADING })
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(individualblogUrl, {
                headers: {
                    token
                }
            })
            dispatch({ type: FETCH_INDIVIDUAL_DATA_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_INDIVIDUAL_DATA_FAILURE, payload: error.message })
        }
    }
}