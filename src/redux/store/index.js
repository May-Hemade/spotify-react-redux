import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import albumReducer from "../reducers/albumReducer"
import homeReducer from "../reducers/homeReducer"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  liked: {
    songs: [],
  },
  
  album: {
    album: {},
    songs: [],
  },
}

const bigReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
})

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
