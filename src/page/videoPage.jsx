import React from "react";
import YouTube from "react-youtube";
import style from "./videoPage.module.css";

function VideoPage({ match }) {
  return (
    <div className={style.root}>
      <YouTube //
        videoId={match.params.videoId}
        id={match.videoId}></YouTube>
    </div>
  );
}

export default VideoPage;
