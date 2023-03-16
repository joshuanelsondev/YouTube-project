import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import './Video.css';
import Comments from '../Comments/Comments';

export default function Video({ allComments, setAllComments }) {
  const location = useLocation();
  const video = location.state;
  const id = video.id.videoId;
  

  const opts = {
    height: '600',
    width: '1000',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="videoDiv">
      <YouTube 
        className="youtubeVideo" 
        videoId={id} 
        opts={opts}
        playerVars={{
          "web-share": 0
        }}
      />
      <Comments allComments={allComments} setAllComments={setAllComments} />
    </div>
  );
}
