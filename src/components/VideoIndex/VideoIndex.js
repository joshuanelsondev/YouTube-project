import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './VideoIndex.css';

export default function VideoIndex({ videos }) {
  const navigate = useNavigate();
  const [videoThumbnails, setVideoThumbnails] = useState([]);

  useEffect(() => {
    setVideoThumbnails(
      videos.map((video, index) => {
        const alt = video.snippet.title;
        const title = video.snippet.title;
        const { url, width, height } = video.snippet.thumbnails.high;
        const id = video.id.videoId;

        return (
          <div className="single-thumbnail" key={id || index}>
            <img
              className="thumbnail-img"
              onClick={() => handleClick(id, video)}
              src={url}
              alt={alt}
              style={{ width: `${width}px`, height: `${height}px` }}
            />
            <span className="title">{title}</span>
          </div>
        );
      })
    );

    function handleClick(id, video) {

        navigate(`/videos/${id}`, { state: { video } });
    }
    
}, [videos, navigate]) 


    return <main className="all-thumbnails">{videoThumbnails}</main>;
};

