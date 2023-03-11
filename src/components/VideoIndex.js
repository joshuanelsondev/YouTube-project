export default function VideoIndex({ videos }) {

    const videoThumbnails = videos.map(video => {
        const url = video.snippet.thumbnails.default.url;
        const width = video.snippet.thumbnails.default.width;
        const height = video.snippet.thumbnails.default.height;
        const alt = video.snippet.title;
        const id = video.id.videoId;
        return(
            <img key={id} src={url} alt={alt} style={{width: `${width}`, height: `${height}`}} />
        )
    })

    return(
        <div>
            {videoThumbnails}
        </div>
    )
};