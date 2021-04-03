import React, { useEffect, useState } from "react";
import { fetchVideo } from "../js/fetch";

function SearchPage({ match }) {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${match.params.word}&key=AIzaSyDpoRaLJ6dO0X-x_xytvjU4dIbTlUkBnXk`;

  const [videoCard, setVideoCard] = useState({
    cards: <h1>잠시만 기다려주세요.</h1>,
  });

  useEffect(
    () => fetchVideo(searchUrl).then(response => setVideoCard(response)),
    []
  );

  return <div>{videoCard.cards}</div>;
}

export default SearchPage;
