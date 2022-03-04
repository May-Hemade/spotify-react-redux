import { createStore, combineReducers, compose, applyMiddleware } from "redux"

import thunk from "redux-thunk"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
