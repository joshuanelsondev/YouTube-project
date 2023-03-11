import { getVideos } from "../api/fetch";
import YouTube from 'react-youtube';

export default function Video() {


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

  return <YouTube videoId={""} opts={opts}  />;
                 
};