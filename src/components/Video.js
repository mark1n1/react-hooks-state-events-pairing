import React from "react";
import Information from "./Information";

function Video({ video }) {

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={ video.embedUrl }
        frameBorder="0"
        allowFullScreen
        title={ video.title }
      />
      <Information video={ video }/>
    </div>
  )
}

export default Video;