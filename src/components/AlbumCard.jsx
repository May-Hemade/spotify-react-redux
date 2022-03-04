import React from "react"
import { Link } from "react-router-dom"
import { AiFillHeart } from "react-icons/ai"
import { BsHeart } from "react-icons/bs"
import { connect } from "react-redux"
import { addToLikedAction } from "../redux/actions"
import { removeFromLikedAction } from "../redux/actions"
const mapStateToProps = (state) => ({
  likedSongs: state.liked.songs,
})
const mapDispatchToProps = (dispatch) => ({
  removeFromLiked: (songs) => dispatch(removeFromLikedAction(songs)),
  addToLiked: (songs) => dispatch(addToLikedAction(songs)),
})

const AlbumCard = ({ song, likedSongs, addToLiked, removeFromLiked }) => {
  const isLiked = likedSongs.includes(song)
  console.log(isLiked, likedSongs)
  const toggleLiked = () => {
    isLiked ? removeFromLiked(song) : addToLiked(song)
  }
  return (
    <div className="col text-center" id={song?.id}>
      <Link to={"/album/" + song?.album.id}>
        <div>
          <img className="img-fluid" src={song?.album.cover_medium} alt="1" />
        </div>
      </Link>
      <p>
        <span>
          <span>
            {isLiked ? (
              <AiFillHeart
                size={22}
                className="likeheart"
                onClick={toggleLiked}
              />
            ) : (
              <BsHeart
                size={22}
                className=" me-4 my-auto likeheart"
                onClick={toggleLiked}
              />
            )}
          </span>
          <Link to={"/album/" + song?.album.id}>
            <span>Album:&nbsp;</span>
            <span>
              "
              {song?.album.title.length < 16
                ? song?.album.title
                : song?.album.title.substring(0, 16) + "..."}
              "
            </span>
            <br />
          </Link>
        </span>
        <Link to={"/artist/" + song?.artist.id}>
          <span>Artist:&nbsp;</span>
          <span>{song?.artist.name}</span>
        </Link>
      </p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard)
