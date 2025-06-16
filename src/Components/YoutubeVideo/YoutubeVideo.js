import React from "react";
import "./YoutubeVideo.css";

function YoutubeVideo({embedId}){
    return(
    <div className="video-responsive">
        <iframe
        width="800"
        height="600"
        src={`https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1&controls=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
    )
}

export default YoutubeVideo;
