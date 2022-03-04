export const GET_ARTIST = "GET_ARTIST"

export const getArtistAction = (artistName, category) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artistName,
          {
            method: "GET",
            headers: new Headers({
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
            }),
          }
        )
        if (response.ok) {
          let result = await response.json()
          let songInfo = result.data

          dispatch({
            type: GET_ARTIST,
            payload: {
              category: category,
              data: songInfo[0],
            },
          })
        } else {
          console.log("error happened fetching the artist")
        }
      } catch (error) {
        console.log(error)
      }
    }, 1000)
  }
}
