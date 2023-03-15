import { useNavigate } from 'react-router-dom';
import './VideoIndex.css';
import { useSelector } from 'react-redux';

export default function VideoIndex() {
  const navigate = useNavigate();
  const videos = useSelector((state) => state.videos.initialVideos);

  function handleClick(id, video) {
    navigate(`/videos/${id}`, { state: { video } });
  }

  return (
    <main className="all-thumbnails">
      {videos.map((video, index) => {
        const title = video.snippet.title;
        const { url, width, height } = video.snippet.thumbnails.high;
        const id = video.id.videoId;

        return (
          <div className="single-thumbnail" key={id || index}>
            <img
              className="thumbnail-img"
              onClick={() => handleClick(id, video)}
              src={url}
              alt={title}
              style={{ width: `${width}px`, height: `${height}px` }}
            />
            <span className="title">{title}</span>
          </div>
        );
      })}
    </main>
  );
}
