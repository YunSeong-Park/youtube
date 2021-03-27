import React from "react";
import VideoCard from "./videoCard";
import style from "./videoCards.module.css";

function loadVideo() {
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
      item.map((video, i) => {
        return (
          <VideoCard
            key={i}
            publishedAt={item.publishedAt}
            title={item.title}
            channelTitle={item.channelTitle}
            thumbnail={item.thumbnailMedium}
          />
        );
      });
    })
    .catch(console.log);
}

const VideoCards = props => {
  return <div className={style.root}>{loadVideo()}</div>;
};

export default VideoCards;
