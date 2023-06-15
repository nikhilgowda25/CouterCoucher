import { applyMiddleware, combineReducers, legacy_createStore, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { menReducer as MenReducer } from "./MenReducer/reducer";
import { cartReducer as CartReducer } from "./cartReducer/reducer";

const rootReducer = combineReducers({
    MenReducer,
    CartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))