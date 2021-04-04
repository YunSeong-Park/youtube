import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styleHome from "./videoCardHome.module.css";
import styleSearch from "./videoCardSearch.module.css";

const VideoCard = props => {
  return (
    <Link
      to={`/video/${props.videoId}`}
      className={clsx({
        [styleHome.root]: props.page === "home",
        [styleSearch.root]: props.page === "search",
      })}>
      <img
        className={clsx({
          [styleHome.thumbnail]: props.page === "home",
          [styleSearch.thumbnail]: props.page === "search",
        })}
        src={props.thumbnail}
        alt=''
      />

      <div className={styleSearch.contents}>
        <h2
          className={clsx({
            [styleHome.videoTitle]: props.page === "home",
            [styleSearch.videoTitle]: props.page === "search",
          })}>
          {props.title}
        </h2>
        <div
          className={clsx({
            [styleHome.details]: props.page === "home",
            [styleSearch.details]: props.page === "search",
          })}>
          <p
            className={clsx({
              [styleHome.publishedAt]: props.page === "home",
              [styleSearch.publishedAt]: props.page === "search",
            })}>
            {props.publishedAt}
          </p>
          <p
            className={clsx({
              [styleHome.channelTitle]: props.page === "home",
              [styleSearch.channelTitle]: props.page === "search",
            })}>
            {props.channelTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
