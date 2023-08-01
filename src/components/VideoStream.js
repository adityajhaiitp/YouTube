import React from 'react'
import { useSearchParams } from "react-router-dom";
import LiveChat from './LiveChat';

const VideoStream = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  return (  
    <div className="flex flex-col w-full">
      <div className="px-5 w-full">
        <div>
      <iframe
        width="400"
        height="200"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="w-full"> 
      <LiveChat/>
    </div>
    </div>
    <CommentsContainer/>
</div>
  )
}

export default VideoStream