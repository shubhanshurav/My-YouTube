import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=''>
      <div className='px-2'>
        <ButtonList />
      </div>
        <VideoContainer />
    </div>
  )
}

export default MainContainer;