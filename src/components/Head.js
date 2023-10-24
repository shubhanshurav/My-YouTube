import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Contants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  // For Seraching
  const[searchQuery, setSearchQuery] = useState("");
  const[suggestions, setSuggestions] = useState([]);
  const[showSuggestions, setShowSuggestions] = useState(false);
  
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  //make an API call after any key press
  // but if difference between 2 API calls is < 200ms
  //Decline the API Call
  useEffect(() => {

    const timer = setTimeout(() =>  {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      } else{
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

  },[searchQuery]);


/** 
*      <-----> Concept of De-bouncing <------->
* 
*    key - i
*    - render the Component
*    - useEffect();
*    - start timer => make api call after 200ms
*
*   key - i
*    - destroy the Component(useEffect return method)
*    - re-render the Component
*    - useEffect();
*    - start timer => make api call after 200ms
*
*    setTimeOut(200) -> Make api call after 200ms
*/

  // API Call
  const getSearchSuggestions = async() => {
    // console.log("API Call: ", searchQuery);

    // Search query given by input + youtubeSearchApi -> it will get suggestions
    try{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
     //console.log(json[1]);
     setSuggestions(json[1]);

     //update cache
     dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
     );
    }
    catch(error){
      console.error('Error:',error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col col-span-12 p-5 m-2 shadow-lg'>
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
          <div>           
            <input 
              type='text' 
              className='px-5 w-1/2 border borger-gray-400 p-1 rounded-l-full'
              // For Searching in Search Bar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button 
            className='border border-gray-400 px-5 py-1 bg-gray-100 rounded-r-full'>
                🔍
            </button>
          </div>
          {showSuggestions && (
           <div className='fixed bg-white py-2 px-2 w-[26rem] shadow-lg rounded-lg border border-gray-100'>
             <ul>
                {suggestions.map((s) => (
                  <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                    🔍 {s}
                  </li>
                  ))}
             </ul>
           </div>)}
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