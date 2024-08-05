import { FETCH_INDIVIDUAL_DATA_FAILURE, FETCH_INDIVIDUAL_DATA_LOADING, FETCH_INDIVIDUAL_DATA_SUCCESS, FETCHDATA_FAILURE, FETCHDATA_LOADING, FETCHDATA_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS } from "./actiontype"
import axios from "axios";

// login
const loginUrl = "https://lightning-leap-11.onrender.com/login";

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

const logoutUrl = "https://lightning-leap-11.onrender.com/logout";

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
const blogUrl = "https://lightning-leap-11.onrender.com/blog";

export const getBlockData = (navigate) => {
    return async (dispatch) => {
        dispatch({ type: FETCHDATA_LOADING })
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(blogUrl, {
                headers: {
                    token
                }
            })
            console.log(response.data);
            if(response.data.Message=="Login successfull"){
                dispatch({ type: FETCHDATA_SUCCESS, payload: response.data })
            }
            else if(response.data.message == "Details of all blog"){
                dispatch({ type: FETCHDATA_SUCCESS, payload: response.data })

            }
            else{
                dispatch({ type: FETCHDATA_FAILURE, payload:  response.data })  
              alert(`${response.data.Message}`)
              navigate("/")

            }
        } catch (error) {
            dispatch({ type: FETCHDATA_FAILURE, payload: error.message })
        }
    }
}




// get blog data
const individualblogUrl = "https://lightning-leap-11.onrender.com/individualblog";

export const getIndividualBlockData = (navigate) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_INDIVIDUAL_DATA_LOADING })
        try {
            const token = localStorage.getItem("token")
            const response = await axios.get(individualblogUrl, {
                headers: {
                    token
                }
            })
            console.log(response.data);
            console.log(response.data.Message);
            if(response.data.Message=="Login successfull"){
                dispatch({ type: FETCHDATA_SUCCESS, payload: response.data })
            }
            else if(response.data.message == "indivudual blog details" && (response.data.blog.length > 0)){
                dispatch({ type: FETCHDATA_SUCCESS, payload: response.data })

            }
            else if(response.data.message == "indivudual blog details" && (response.data.blog.length  == 0)){
                alert("Till now you not aded you post, add you post first")
                navigate("/addblog")
            }
            else if(response.data.Message == "You are not authorized please login first"){
                alert(`${response.data.Message}`)
                navigate("/")
            }
            else{
                dispatch({ type: FETCHDATA_FAILURE, payload:  response.data })  
              alert(`${response.data.Message}`)
              navigate("/")

            }
            // dispatch({ type: FETCH_INDIVIDUAL_DATA_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_INDIVIDUAL_DATA_FAILURE, payload: error.message })
        }
    }
}