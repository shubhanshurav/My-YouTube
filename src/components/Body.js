import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex '>
      <div className='pl-2'>
        <Sidebar />
      </div>
        {/* isme ya to maincontainer load hoga ya to watchpage load hoga */}
        {/* <MainContainter /> */}
        {/* <WatchPage /> */}
        <Outlet />
    </div>
  )
}

export default Body