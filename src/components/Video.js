import YouTube from 'react-youtube';
import { useLocation } from "react-router-dom";

export default function Video() {
    const location = useLocation();
    const video = location.state.video
    const id = video.id.videoId


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

  return <YouTube videoId={id} opts={opts}  />;
                 
};