import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/Contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideos();
  },[]);

  const getVideos = async () => {
    // try{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    // }
    // catch(error){
    //   console.error("There is something wrong,please try again!!")
    // }
  };

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) =>  (
           <Link to={"/watch?v=" + video.id}>
              <VideoCard key={video.id} info={video} />
           </Link> 
        ))
      }
    </div>
  )
}

export default VideoContainer;