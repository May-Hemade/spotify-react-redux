import { initialState } from "../store"
import {ADD_TO_PLAYER} from "../actions"

const playerReducer = (state = initialState.player, action) => {
    switch (action.type) {
        case ADD_TO_PLAYER:
            return{
                ...state,
                selectedSong: action.payload
            }
            default:
                return state
                
                 
                
    }

   
}

export default playerReducer