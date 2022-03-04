import { GET_ARTIST } from "../actions"
import { initialState } from "../store"

const homeReducer = (state = initialState.home, action) => {
  switch (action.type) {
    case GET_ARTIST:
      const category = action.payload.category
      return {
        ...state,
        [category]: [...state[category], action.payload.data],
      }

    default:
      return state
  }
}

export default homeReducer
