import React from "react"
import { Button } from "react-bootstrap"
import { Plus } from "react-bootstrap-icons"
import { connect } from "react-redux"
import { addToPlaylistAction } from "../redux/actions"

const mapStateToProps = (state) => ({
  playlist: state.playlist.tracks,
  likedSongs: state.liked.songs,
})

const mapDispatchToProps = (dispatch) => ({
  addToPlaylist: (trackToAdd) => {
    console.log("hey")
    dispatch(addToPlaylistAction(trackToAdd))
  },
  removeFromLiked: (songs) => dispatch(removeFromLikedAction(songs)),
  addToLiked: (songs) => dispatch(addToLikedAction(songs)),
})

const Song = ({ track, playlist, addToPlaylist }) => {
  const isInPlaylist = () => {
    const trackIndex = playlist.findIndex((song) => song.id === track.id)
    return trackIndex !== -1
  }
  const Song = ({ track, likedSongs, addToLiked, removeFromLiked }) => {
    const isLiked = likedSongs.includes(track);
    console.log(isLiked, likedSongs);
    const toggleLiked = () => {
      isLiked ? removeFromLiked(track) : addToLiked(track);
    };

  return (
    <div className="py-3 trackHover d-flex justify-content-between">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <span>
        {isLiked ? (
          <AiFillHeart size={22} className="likeheart" onClick={toggleLiked} />
        ) : (
          <BsHeart
            size={22}
            className=" me-4 my-auto likeheart"
            onClick={toggleLiked}
          />
        )}
      </span>
      <div>
        <Button
          className=" btn-success mr-4 "
          disabled={isInPlaylist()}
          onClick={() => {
            addToPlaylist(track)
          }}
        >
          <Plus></Plus>
        </Button>

        <small className="" style={{ color: "white" }}>
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)

