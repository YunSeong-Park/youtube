import React from "react";
import YouTube from "react-youtube";

function VideoPage({ match }) {
  console.log(match);
  return <YouTube></YouTube>;
}

export default VideoPage;
