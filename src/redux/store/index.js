import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import homeReducer from "../reducers/homeReducer";
import playlistReducer from "../reducers/playlistReducer";

import artistReducer from "../reducers/artistReducer";
import thunk from "redux-thunk";
import albumReducer from "../reducers/albumReducer";
import homeReducer from "../reducers/homeReducer";
import likedReducer from "../reducers/likedReducer";

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  home: {
    rockSongs: [],
    popSongs: [],
    hipHopSongs: [],
  },
  album: {
    album: {},
    songs: [],
  },
  artist: {
    artist: {},
    songs: [],
  },

  playlist: {
    tracks: [],
  },
  liked: {
    songs: [],
  },
};

const bigReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
  artist: artistReducer,
  liked: likedReducer,
  playlist: playlistReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
