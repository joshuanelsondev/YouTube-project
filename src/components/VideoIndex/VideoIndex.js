import { Link } from 'react-router-dom';
import './VideoIndex.css';
import { useSelector } from 'react-redux';

export default function VideoIndex() {
  const videos = useSelector((state) => state.videos.initialVideos);

  return (
    <main className="all-thumbnails">
      {videos.map((video, index) => {
        const title = video.snippet.title;
        const { url, width, height } = video.snippet.thumbnails.high;
        const id = video.id.videoId;

        return (
          <div className="single-thumbnail" key={id || index}>
            <Link to={`/videos/${id}`} state={ video } >
              <img
                className="thumbnail-img"
                src={url}
                alt={title}
                style={{ width: `${width}px`, height: `${height}px` }}
              />
            </Link>
            <span className="title">{title}</span>
          </div>
        );
      })}
    </main>
  );
}
