import React, { useEffect, useState } from "react";
import VideoCard from "./videoCard";
import style from "./videoCards.module.css";

const loadVideo = () => {
  return fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDpoRaLJ6dO0X-x_xytvjU4dIbTlUkBnXk"
  )
    .then(response => response.json())
    .then(json =>
      json.items.map(video => {
        return {
          videoId: video.id,
          publishedAt: video.snippet.publishedAt,
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          thumbnailMedium: video.snippet.thumbnails.medium.url,
        };
      })
    )
    .then(item => {
      return item.map((video, i) => {
        return (
          <VideoCard
            key={i}
            videoId={video.videoId}
            publishedAt={video.publishedAt}
            title={video.title}
            channelTitle={video.channelTitle}
            thumbnail={video.thumbnailMedium}
          />
        );
      });
    })
    .then(cards => {
      return { cards };
    });
};

const VideoCards = props => {
  const [videoCard, setVideoCard] = useState({
    cards: <h1> 잠시만 기다려주세요. </h1>,
  });

  useEffect(() => loadVideo().then(response => setVideoCard(response)), []);

  return <div className={style.root}>{videoCard.cards}</div>;
};

export default VideoCards;
