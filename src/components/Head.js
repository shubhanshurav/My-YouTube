import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
                onClick= { () => toggleMenuHandler()}
                src='./assets/Hamburger_icon.svg.png' 
                alt='Menu' 
                className='h-5 cursor-pointer'
            />
           <a href='/'>
            <img 
              src='./assets/youtube-logo.png' 
              alt='logo' 
              className='h-6 mx-2 cursor-pointer'
              />
           </a>
        </div>

        <div className='col-span-10 px-10'>
            <input type='text' 
              className='w-1/2 border borger-gray-400 p-1 rounded-l-full'
            />
            <button className='border border-gray-400 px-5 py-1 bg-gray-100 rounded-r-full'>
                🔍
            </button>
        </div>

        <div className='col-span-1'>
            <img src='./assets/user.png' alt='user-logo' 
            className='h-6'
            />
        </div>
    </div>
  )
}

export default Head