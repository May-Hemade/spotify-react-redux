export const ADD_TO_PLAYER = "ADD_TO_PLAYER"

export const addToPlayerAction = (songToAdd) =>({
    type: ADD_TO_PLAYER,
    payload: songToAdd
})

