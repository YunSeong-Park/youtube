import React from "react";
import style from "./videoCard.module.css";

const VideoCard = props => {
  return (
    <a className={style.root}>
      <img className={style.thumbnail} src="./logo.png" alt="" />
      <h2 className={style.videoTitle}> Video Title</h2>
      <div className={style.details}>
        <p className={style.publishedAt}>time</p>
        <p className={style.channelTitle}> Channel Title</p>
      </div>
    </a>
  );
};

export default VideoCard;
