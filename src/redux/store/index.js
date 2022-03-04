import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import homeReducer from "../reducers/homeReducer"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  home: {
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  },
}

const bigReducer = combineReducers({
  home: homeReducer,
})

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
)
