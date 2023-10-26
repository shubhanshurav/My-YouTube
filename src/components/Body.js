import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex m-auto col-span-12'>
      <div className='pl-2 col-span-1'>
        <Sidebar />
      </div>
        {/* isme ya to maincontainer load hoga ya to watchpage load hoga */}
        {/* <MainContainter /> */}
        {/* <WatchPage /> */}
      <div className='col-span-11'>
         <Outlet />
      </div>
    </div>
  )
}

export default Body