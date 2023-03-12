import { useNavigate } from "react-router-dom";


export default function VideoIndex({ videos }) {
    const navigate = useNavigate();

    const videoThumbnails = videos.map(video => {
        const url = video.snippet.thumbnails.high.url;
        const width = video.snippet.thumbnails.high.width;
        const height = video.snippet.thumbnails.high.height;
        const alt = video.snippet.title;
        const id = video.id.videoId;

        return(
            <img key={id} onClick={() => handleClick(id, video)} src={url} alt={alt} style={{width: `${width}px`, height: `${height}px`}} />
        )
    })

    function handleClick(id, video) {

        navigate(`/videos/${id}`, { state: { video } });
    }

    return(
        <div>
            {videoThumbnails}
        </div>
    )
};

