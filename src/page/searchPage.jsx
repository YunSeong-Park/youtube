import React, { useEffect, useState } from "react";
import { fetchSearchVideoCards } from "../js/fetch";
import style from "./searchPage.module.css";

function SearchPage({ match }) {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${match.params.word}&key=AIzaSyD2eu3UjYZrqu6KXJju6waYOj17Vn3vo_Q`;

  const [videoCard, setVideoCard] = useState({
    cards: <h1>잠시만 기다려주세요.</h1>,
  });

  useEffect(() => fetchSearchVideoCards(searchUrl).then(response => setVideoCard(response)), [match.params.word]);

  return <div className={style.root}>{videoCard.cards}</div>;
}

export default SearchPage;
