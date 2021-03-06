import VideoCard from "../components/videoCard";

export const fetchVideo = url => {
  return fetch(url)
    .then(response => response.json())
    .then(json =>
      json.items.map(video => {
        return { videoId: video.id, publishedAt: video.snippet.publishedAt, title: video.snippet.title, channelTitle: video.snippet.channelTitle, thumbnailMedium: video.snippet.thumbnails.medium.url, channelId: video.snippet.channelId };
      })
    );
};

export const fetchHomeVideoCards = url => {
  return fetchVideo(url)
    .then(item => {
      return item.map((video, i) => {
        return <VideoCard key={i} videoId={video.videoId} publishedAt={video.publishedAt} title={video.title} channelTitle={video.channelTitle} thumbnail={video.thumbnailMedium} channelId={video.channelId} page='home' />;
      });
    })
    .then(cards => {
      return { cards };
    })
    .catch(e => {
      cards: <h1>youtube api의 일일 쿼리가 초과했습니다.</h1>;
    });
};

export const fetchSearchVideoCards = url => {
  return fetchVideo(url)
    .then(item => {
      return item.map((video, i) => {
        return <VideoCard key={i} videoId={video.videoId.videoId} publishedAt={video.publishedAt} title={video.title} channelTitle={video.channelTitle} thumbnail={video.thumbnailMedium} channelId={video.channelId} page='search' />;
      });
    })
    .then(cards => {
      return { cards };
    })
    .catch(e => {
      cards: <h1>youtube api의 일일 쿼리가 초과했습니다.</h1>;
    });
};

export const fetchChannel = channelId => {
  return fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyD2eu3UjYZrqu6KXJju6waYOj17Vn3vo_Q`)
    .then(response => response.json())
    .then(json => json.items.find(() => true).snippet.thumbnails.default.url);
};
