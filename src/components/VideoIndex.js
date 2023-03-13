import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function VideoIndex({ videos }) {
   
    const [videoThumbnails, setVideoThumbnails] = useState(videos);
    const navigate = useNavigate();
    console.log(videos)
    useEffect(() => {
        setVideoThumbnails(videos.map(video => {

        const url = video.snippet.thumbnails.high.url;
        const width = video.snippet.thumbnails.high.width;
        const height = video.snippet.thumbnails.high.height;
        const alt = video.snippet.title;
        const id = video.id.videoId;
        return(
            <img key={id} onClick={() => handleClick(id, video)} src={url} alt={alt} style={{width: `${width}px`, height: `${height}px`}} />
        )
    }))
}, [videos])
    


    function handleClick(id, video) {

        navigate(`/videos/${id}`, { state: { video } });
    }

    return(
        <div>
            {videoThumbnails}
        </div>
    )
};

