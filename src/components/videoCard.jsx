import React from "react";
import style from "./videoCard.module.css";

const VideoCard = props => {
  return (
    <a className={style.root} href="">
      <img className={style.thumbnail} src={props.thumbnail} alt="" />
      <h2 className={style.videoTitle}>{props.title}</h2>
      <div className={style.details}>
        <p className={style.publishedAt}>{props.publishedAt}</p>
        <p className={style.channelTitle}>{props.channelTitle}</p>
      </div>
    </a>
  );
};

export default VideoCard;
