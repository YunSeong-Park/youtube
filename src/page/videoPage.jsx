import React, { useCallback, useEffect, useState } from "react";
import YouTube from "react-youtube";
import { fetchSearchVideoCards } from "../js/fetch";
import style from "./videoPage.module.css";

function VideoPage({ match }) {
  const [relatedVideoCards, setRelatedVideoCards] = useState({ cards: <h1>로드중</h1> });
  const relatedURL = `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&relatedToVideo=${match.params.videoId}&key=AIzaSyD2eu3UjYZrqu6KXJju6waYOj17Vn3vo_Q`;
  useEffect(
    useCallback(() => fetchSearchVideoCards(relatedURL).then(setRelatedVideoCards)),
    []
  );

  return (
    <div className={style.root}>
      <YouTube //
        videoId={match.params.videoId}
        id={match.videoId}></YouTube>
      <div className={style.list}>{relatedVideoCards.cards}</div>
    </div>
  );
}

export default VideoPage;
