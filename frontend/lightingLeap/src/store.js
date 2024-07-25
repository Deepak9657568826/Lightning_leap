import { applyMiddleware, combineReducers, createStore } from "redux";
import { blogreducer, loginreducer } from "./redux/reducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
    auth:loginreducer, 
    blog:blogreducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
