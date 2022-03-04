import React from "react";
import { addToLikedAction } from "../redux/actions";
import { removeFromLikedAction } from "../redux/actions";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  likedSongs: state.liked.songs,
});
const mapDispatchToProps = (dispatch) => ({
  removeFromLiked: (songs) => dispatch(removeFromLikedAction(songs)),
  addToLiked: (songs) => dispatch(addToLikedAction(songs)),
});

const Song = ({ track, likedSongs, addToLiked, removeFromLiked }) => {
  const isLiked = likedSongs.includes(track);
  console.log(isLiked, likedSongs);
  const toggleLiked = () => {
    isLiked ? removeFromLiked(track) : addToLiked(track);
  };
  return (
    <div className="py-3 trackHover">
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

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
