import { initialState } from "../store";
import { ADD_TO_LIKED } from "../actions";
import { REMOVE_FROM_LIKED } from "../actions";
const likedReducer = (state = initialState.liked, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_FROM_LIKED:
      return {
        ...state,

        songs: [
          ...state.songs.slice(0, action.payload),
          ...state.songs.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export default likedReducer;
