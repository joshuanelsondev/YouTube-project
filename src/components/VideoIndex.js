import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './VideoIndex.css';


export default function VideoIndex({ videos }) {
   
    const navigate = useNavigate();
    const [videoThumbnails, setVideoThumbnails] = useState([]);
    console.log(videos)

    useEffect(() => {
    
        setVideoThumbnails(videos.map((video, index) => {
            const url = video.snippet.thumbnails.high.url;
            const width = video.snippet.thumbnails.high.width;
            const height = video.snippet.thumbnails.high.height;
            const alt = video.snippet.title;
            const id = video.id.videoId;
            const title = video.snippet.title;
        return(
            <div key={`${id}-${index}`} className="thumbnail">
                <img className="thumbnailImg"  onClick={() => handleClick(id, video)} src={url} alt={alt} style={{width: `${width}px`, height: `${height}px`}} />
                <span className="title">{title}</span>
            </div>
        )
    }))
}, [videos]) 


    function handleClick(id, video) {

        navigate(`/videos/${id}`, { state: { video } });
    }

    return(
        <div className="thumbnailsDiv">
            {videoThumbnails}
        </div>
    )
};

