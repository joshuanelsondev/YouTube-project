import YouTube from 'react-youtube';
import { useLocation } from "react-router-dom";
import './Video.css'

export default function Video() {
    const location = useLocation();
    const video = location.state.video
    const id = video.id.videoId


    const opts = {
        height: '600',
        width: '1000',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

  return <YouTube className='youtubeVideo' videoId={id} opts={opts}  />;
                 
};