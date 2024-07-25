import { FETCH_INDIVIDUAL_DATA_FAILURE, FETCH_INDIVIDUAL_DATA_LOADING, FETCH_INDIVIDUAL_DATA_SUCCESS, FETCHDATA_FAILURE, FETCHDATA_LOADING, FETCHDATA_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS } from "./actiontype";

const loginInitialState = {
    loading: false,
    data: "",
    error: "",
    login:false,

}

export function loginreducer(state = loginInitialState, action) {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state, loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,login:true, loading: false, data: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state, login:false, data: "", error: action.payload
            }
        case LOGOUT_LOADING:
            return {
                ...state, loading: true , login:false, 
            }
        case LOGOUT_SUCCESS:
            return {
                ...state, loading: false, data: "",login:false, 
            }
        case LOGOUT_FAILURE:
            return {
                ...state, loading: false, data: "",login:false, 
            }
        default:
            return state
    }
}



const blogInitialState = {
    loading: false,
    data: [],
    error: "",

}

export function blogreducer(state = blogInitialState, action) {
    switch (action.type) {
        case FETCHDATA_LOADING:
            return {
                ...state, loading: true
            }
        case FETCHDATA_SUCCESS:
            return {
                ...state, error: "", loading: false, data: action.payload
            }
        case FETCHDATA_FAILURE:
            return {
                ...state, data: [], error: action.payload, loading: false
            }
        case FETCH_INDIVIDUAL_DATA_LOADING:
            return {
                ...state, loading: true
            }
        case FETCH_INDIVIDUAL_DATA_SUCCESS:
            return {
                ...state, error: "", loading: false, data: action.payload
            }
        case FETCH_INDIVIDUAL_DATA_FAILURE:
            return {
                ...state, error: action.payload, loading: false, data: []
            }

        default:
            return state
    }
}

