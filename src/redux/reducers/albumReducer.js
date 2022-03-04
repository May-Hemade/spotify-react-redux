import { GET_ALBUM } from "../actions"
import { initialState } from "../store"

const albumReducer = (state = initialState.album, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload.album,
        songs: action.payload.songs,
      }

    default:
      return state
  }
}

export default albumReducer
