import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

   const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //Early Return pattern
   if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-64'>
        <ul className='border-b-2 border-zinc-800 pb-2'>
            <li  className='py-[3px]'><Link to="/">Home</Link></li>
            <li  className='py-[3px]'>Shorts</li>
            <li  className='py-[3px]'>Videos</li>
            <li  className='py-[3px]'>Live</li>
        </ul>
        <h1 className='font-bold pt-3'>Subscriptions</h1>
        <ul className='border-b-2 border-zinc-800 pb-2'>
            <li className='py-[3px]'>Music</li>
            <li className='py-[3px]'>Sports</li>
            <li className='py-[3px]'>Gaming</li>
            <li className='py-[3px]'>Movies</li>
        </ul>
        <h1 className='font-bold pt-3'>Watch Later </h1>
        <ul>
            <li className='py-[3px]'>Music</li>
            <li className='py-[3px]'>Sports</li>
            <li className='py-[3px]'>Gaming</li>
            <li className='py-[3px]'>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar