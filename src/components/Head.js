import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slices/appSlice";
// import { YOUTUBE_SEARCH_API } from "../utils/Contants";
import { cacheResults } from "../redux/slices/searchSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
// import { BsMic } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const YOUTUBE_SEARCH_API = process.env.REACT_APP_YOUTUBE_SEARCH_API;

const Head = () => {
  // For Seraching
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  //make an API call after any key press
  // but if difference between 2 API calls is < 200ms
  //Decline the API Call

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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

  const getSearchSuggestions = async () => {
    // console.log("API Call: ", searchQuery);

    // Search query given by input + youtubeSearchApi -> it will get suggestions
    try {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col col-span-12 p-5 shadow-lg sticky top-0 bg-black items-center">
      <div className="flex col-span-2 md:col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src="./assets/Hamburger_icon.svg.png"
          alt="Menu"
          className="h-7 cursor-pointer bg-white"
        />
        <a href="/">
          <img
            src="./assets/youtube-darkmode.png"
            alt="logo"
            className="h-7 mx-2 cursor-pointer"
          />
        </a>
      </div>

      <div className="md:col-span-8">
        <div className="items-center w-fit md:w-[80%] px-4 md:px-10 m-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-5 w-[90%] border borger-zinc-600 p-2 rounded-l-full bg-zinc-800"
              // For Searching in Search Bar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 px-2 md:px-3 p-2 bg-black rounded-r-full">
              {/* <img src='/assets/searchicon.jpeg' alt='searchlogo' className=''/> */}
              <div className="text-2xl">
                <AiOutlineSearch />
              </div>
            </button>
            {/* <div className="p-3 rounded-full bg-zinc-700 text-xl m-auto hidden md:flex">
              <BsMic />
            </div> */}
          </div>
          <div className="fixed w-[42%] ">
            {showSuggestions && (
              <div className="bg-white py-2 m-auto px-2 shadow-lg rounded-lg border border-gray-100">
                <ul>
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className="py-2 px-3 shadow-sm text-black hover:bg-gray-100"
                    >
                      🔍 {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 col-span-1 ">
        <div className="md:flex text-2xl gap-5 cursor-pointer hidden">
          <BiVideoPlus />
          <IoMdNotificationsOutline />
        </div>
        <div className="border-2 border-gray-400 rounded-full w-9 h-9">
          <img
            src="./assets/pic.jpg"
            alt="user-logo"
            className="rounded-full "
          />
        </div>
        {/* <div className='text-5xl cursor-pointer'>
               <BiUserCircle />
            </div> */}
      </div>
    </div>
  );
};

export default Head;
