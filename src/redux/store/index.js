 import { createStore, combineReducers, compose, applyMiddleware } from "redux"
 import playerReducer from "../reducers/playerReducer"


import thunk from "redux-thunk"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    home: {
      rockSongs: [],
      popSongs: [],
      hipHopSongs: [],
     

    },
    player:{
        selectedSong: {}
    }
  }



const bigReducer = combineReducers({
    player: playerReducer,
  })

  export const configureStore = createStore(
    bigReducer,
    initialState,
    aComposeFunction(applyMiddleware(thunk))
  )