import React from "react"
import { MusicNoteList } from "react-bootstrap-icons"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  playlist: state.playlist.tracks,
})

const mapDispatchToProps = (dispatch) => ({})

function Playlist({ playlist }) {
  return (
    <div className="text-light ">
      <MusicNoteList></MusicNoteList>
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
