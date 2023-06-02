import React from "react";
import "./YoutubeVideo.css";

function YoutubeVideo({embedId}){
    return(
    <div className="video-responsive">
        <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
    )
}

export default YoutubeVideo;
