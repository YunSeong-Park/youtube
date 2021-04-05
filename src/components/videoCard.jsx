import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchChannel } from "../js/fetch";
import styleHome from "./videoCardHome.module.css";
import styleSearch from "./videoCardSearch.module.css";

const VideoCard = props => {
  const [channelsThumbnailSRC, setChannelsThumbnailSRC] = useState("#");
  useEffect(() => {
    const channelId = props.channelId;
    fetchChannel(channelId).then(setChannelsThumbnailSRC);
  }, []);

  const publishedAtDate = new Date(props.publishedAt);
  const publishedAt = publishedAtDate.getFullYear() + "년 " + (publishedAtDate.getMonth() + 1) + "월 " + publishedAtDate.getDate() + "일";

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
            {publishedAt}
          </p>
          <Link
            to={`/channel/${props.channelId}`}
            className={clsx({
              [styleHome.channelTitle]: props.page === "home",
              [styleSearch.channelTitle]: props.page === "search",
            })}>
            <img src={channelsThumbnailSRC} />
            {props.channelTitle}
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
