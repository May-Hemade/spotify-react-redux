import React from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  playlist: state.playlist.tracks,
})

const mapDispatchToProps = (dispatch) => ({})

function Playlist({ playlist }) {
  return (
    <div className="text-light ">
      <i class="fa-thin fa-play fa-lg text-light "></i>
      <span className="ml-2"> PlayList </span>
      <ul>
        {playlist.map((track, i) => (
          <li key={track.id} className="list">
            <div className="m-4 list">{track.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
