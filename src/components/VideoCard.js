import React from 'react';

const VideoCard = ({info}) => {
    // console.log(info); 

    if (!info) {
        // Handle loading or empty state
        return <div>Loading...</div>;
    }
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
    // const formattedViews = formatViews(statistics.viewCount);

    // Function to convert the no. of views into millions, thousands.....
   const formatViews = (viewCount) => {
      if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'M views';
      } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + 'K views';
      } else {
        return viewCount + ' views';
      }
    };

  return (
    <div className='w-[24rem] md:w-[19rem] m-auto shadow-lg'>
        <img 
          src={thumbnails.medium.url} 
          alt='thumbnail'  
          className='rounded-lg w-full md:w-auto p-2 m-auto'
        />
        <ul className='m-auto px-3 md:px-5 pb-2'>
            <li className='font-bold py-2 text-sm'>{title}</li>
            <li className='px-'>{channelTitle}</li>
            <li>{formatViews(statistics.viewCount)}</li>
        </ul>
    </div>
  );
};


// this is the Higher order funtion that changes the first VideoCard
export const AdVideoCard = ({info}) => {
  return (
    <div className='border border-zinc-700 cursor-pointer'>
       <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;