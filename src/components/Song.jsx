import React from "react";
import { connect } from "react-redux"
import {addToPlayerAction} from "../redux/actions"

const mapStateToProps = (state) => ({
  songDetails: state.player.selectedSong
})
const mapDispatchToProps = (dispatch) => ({
    addToPlayer: (songToAdd) => {
        dispatch(addToPlayerAction(songToAdd))
    }
})
const Song = ( {addToPlayer, track }) => {
  
  return(

  
  <div className="py-3 trackHover" onClick={() => addToPlayer(track)}  >
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
) };

export default connect(mapStateToProps,mapDispatchToProps)(Song)
