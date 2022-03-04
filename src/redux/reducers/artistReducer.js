import { GET_ARTIST } from "../actions"
import { initialState } from "../store"

const artistReducer = (state = initialState.artist, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload.artist,
        songs: action.payload.songs,
      }

    default:
      return state
  }
}

export default artistReducer
