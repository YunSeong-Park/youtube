import React, { useEffect, useState } from "react";
import { fetchHomeVideoCards } from "../js/fetch";
import style from "./home.module.css";

const Home = props => {
  const [videoCard, setVideoCard] = useState({
    cards: <h1> 잠시만 기다려주세요. </h1>,
  });

  useEffect(
    () => fetchHomeVideoCards(mostUrl).then(response => setVideoCard(response)),
    []
  );

  return <div className={style.root}>{videoCard.cards}</div>;
};

export default Home;

const mostUrl =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDpoRaLJ6dO0X-x_xytvjU4dIbTlUkBnXk";
