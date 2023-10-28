import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/Contants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideos();
  },[]);

  const getVideos = async () => {
    try{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    }
    catch(error){
      console.error("There is something wrong,please try again!!")
    }
  };

  return (
    <div className=''>
      <div className='flex flex-wrap p-1 m-auto px-4'>
       {videos[0] && <AdVideoCard info={videos[42]} />}
       {
        videos.map((video) =>  (
           <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
           </Link> 
        ))
      }
      </div>
    </div>
  );
};

export default VideoContainer;