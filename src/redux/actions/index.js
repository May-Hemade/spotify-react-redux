export const ADD_TO_LIKED = "ADD_TO_LIKED";
export const GET_SONGS = "GET_SONGS";

export const addToLikedAction = (song) => ({
  type: ADD_TO_LIKED,
  payload: song,
});

