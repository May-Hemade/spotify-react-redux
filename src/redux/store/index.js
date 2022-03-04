import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import likedReducer from "../reducers/likedReducer"

const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  liked: {
    songs: [],
  },
  album : {
    songs: [],
  },
};

const bigReducer = combineReducers({
  liked: likedReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
