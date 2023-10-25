import React from 'react';

const VideoCard = ({info}) => {
    // console.log(info); 

    if (!info) {
        // Handle loading or empty state
        return <div>Loading...</div>;
    }
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;

  return (
    <div className='p-2 w-[19.5rem] shadow-lg m-auto'>
        <img 
          src={thumbnails.medium.url} 
          alt='thumbnail' 
          className='rounded-lg'
        />
        <ul>
            <li className='font-bold py-2 text-sm'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  );
};


// this is the Higher order funtion that changes the first VideoCard
export const AdVideoCard = ({info}) => {
  return (
    <div className='p-1 m-1 border border-red-800'>
       <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;