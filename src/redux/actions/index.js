export const GET_ARTIST = "GET_ARTIST"
export const GET_ALBUM = "GET_ALBUM"

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

export const getAlbumAction = (albumId) => {
  return (dispatch) => {
    setTimeout(async () => {
      let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
      })

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
          {
            method: "GET",
            headers,
          }
        )

        if (response.ok) {
          let album = await response.json()

          dispatch({
            type: GET_ALBUM,
            payload: {
              album: album,
              songs: album.tracks.data,
            },
          })
        }
      } catch (exception) {
        console.log(exception)
      }
    }, 1000)
  }
}

export const getAlbumArtist = (artistId) => {
  return (dispatch) => {
    setTimeout(async () => {
      let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
      })

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
            artistId,
          {
            method: "GET",
            headers,
          }
        )

        if (response.ok) {
          let artist = await response.json()

          let tracksResponse = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
              artist.name,
            {
              method: "GET",
              headers,
            }
          )

          if (tracksResponse.ok) {
            let tracklist = await tracksResponse.json()
            dispatch({
              type: GET_ARTIST,
              payload: {
                artist: artist,
                songs: tracklist,
              },
            })
          }
        }
      } catch (exception) {
        console.log(exception)
      }
    }, 1000)
  }
}
