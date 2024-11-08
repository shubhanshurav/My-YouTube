import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../../utils/Contants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const YOUTUBE_VIDEOS_API = process.env.REACT_APP_YOUTUBE_VIDEOS_API;

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items);
    } catch (error) {
      console.error("There is something wrong,please try again!!");
    }
  };

  return (
    <div className="py-3">
      <div className="flex flex-wrap p-1 m-auto px-4">
        {videos[0] && <AdVideoCard info={videos[42]} />}
        {videos.map((video) => (
          <Link
            key={video.id}
            to={
              "/watch?v=" +
              video.id +
              "&title=" +
              video.snippet.localized.title +
              "&channelTitle=" +
              video.snippet.channelTitle
            }
          >
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
