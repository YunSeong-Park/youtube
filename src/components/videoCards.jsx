import React, { useEffect, useState } from "react";
import VideoCard from "./videoCard";
import style from "./videoCards.module.css";

const loadVideo = () => {
  return fetch("./test.json")
    .then(response => response.json())
    .then(json => json.items.map(item => item.snippet))
    .then(video =>
      video.map(item => {
        return {
          publishedAt: item.publishedAt,
          title: item.title,
          channelTitle: item.channelTitle,
          thumbnailMedium: item.thumbnails.medium.url,
        };
      })
    )
    .then(item => {
      return item.map((video, i) => {
        return (
          <VideoCard
            key={i}
            publishedAt={video.publishedAt}
            title={video.title}
            channelTitle={video.channelTitle}
            thumbnail={video.thumbnailMedium}
          />
        );
      });
    })
    .then(cards => {
      return { component: cards };
    });
};

const VideoCards = props => {
  const [videoCard, setVideoCard] = useState({
    component: <h1> 잠시만 기다려주세요. </h1>,
  });
  // const videoCards = loadVideo();
  // setVideoCard(videoCards);
  //useEffect(() => loadVideo(), []);

  return <div className={style.root}>{videoCard.component}</div>;
};

export default VideoCards;
