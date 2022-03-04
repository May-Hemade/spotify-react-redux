import { initialState } from "../store";
import { ADD_TO_LIKED } from "../actions";

const likedReducer = (state = initialState.liked, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      return {
        ...state,
     songs: [...state.songs, action.payload],
      };

    default:
      return state;
  }
};

export default likedReducer;
