import VideoCard from "../components/videoCard";

export const fetchVideo = url => {
  return fetch(url)
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
