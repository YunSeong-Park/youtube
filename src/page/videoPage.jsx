import React from "react";
import YouTube from "react-youtube";

function VideoPage({ match }) {
  console.log(match.params);
  return (
    <YouTube //
      videoId={match.params.videoId}
      id={match.videoId}></YouTube>
  );
}

export default VideoPage;
