import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import {BsYoutube, BsCollectionPlay, BsMusicNote, BsNewspaper} from 'react-icons/bs';
// import {SiYoutubestudio, SiYoutubemusic, SiYoutubegaming, SiShortcut} from 'react-icons/si';
// import {TbBrandYoutubeKids} from 'react-icons/tb';
// import {AiFillHome, AiOutlineLike, AiOutlineSetting, AiOutlineTrophy, AiOutlineBulb} from 'react-icons/ai';
// import {RiFolderVideoLine, RiFeedbackLine} from 'react-icons/ri';
// import {MdOutlineVideoLibrary, MdOutlineWatchLater} from 'react-icons/md';
// import {VscHistory} from 'react-icons/vsc';
// import {CgFlag} from 'react-icons/cg';
// import {TfiHelpAlt} from 'react-icons/tfi';
// import {LiaFireAltSolid} from 'react-icons/lia';
// import {HiOutlineShoppingBag} from 'react-icons/hi';
// import {PiFilmSlateBold} from 'react-icons/pi';
// import {CiStreamOn} from 'react-icons/ci';
// import {GiClothes} from 'react-icons/gi';
// import {BiPodcast} from 'react-icons/bi';

const Sidebar = () => {

   const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //Early Return pattern
   if(!isMenuOpen) return null;

  return (
    <div className='pl-4 shadow-lg lg:w-64 md:w-48 sm:w-42 h-screen overflow-y-auto'>
        <ul className='border-b-2 border-zinc-800 my-2 pb-4'>
            <li  className='text-sm text-gray-200 hover:bg-zinc-900 py-3 px-2'>
                <Link to="/" className='flex gap-4 items-center'>
                   {/* <span className='text-xl'>< AiFillHome /></span> */}
                   <span className='text-xl'></span>
                   Home
                </Link>
            </li>
            <li  className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< SiShortcut /></span> */}
                <span className='text-xl'></span>
                Shorts
            </li>
            <li  className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< BsCollectionPlay /></span> */}
                <span className='text-xl'></span>
                Subscriptions
            </li>
        </ul>
        <ul className='border-b-2 border-zinc-800 my-2 pb-4'>
            <li  className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< MdOutlineVideoLibrary /></span> */}
                <span className='text-xl'></span>
                Library
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< VscHistory /></span> */}
                <span className='text-xl'></span>
                History
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< RiFolderVideoLine /></span> */}
                <span className='text-xl'></span>
                Your videos
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< MdOutlineWatchLater /></span> */}
                <span className='text-xl'></span>
                Watch Later
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< AiOutlineLike /></span> */}
                <span className='text-xl'></span>
                Liked videos
            </li>
        </ul>
        <h1 className='pt-3'>Subscriptions</h1>
        <ul className='border-b-2 border-zinc-800 my-2 pb-4'>
            <li className='flex text-sm text-gray-200 gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                <img src='./assets/gfg.jpg' alt='gfglogo' className='rounded-full w-7 h-7' /> 
                GeeksForGeeks
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
            <img src='./assets/cwh.jpg' alt='gfglogo' className='rounded-full w-7 h-7' /> 
                CodeWithHarry
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                <img src='./assets/Codehelp.jpg' alt='gfglogo' className='rounded-full w-7 h-7' /> 
                Code Help - by Babbar
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                <img src='./assets/Jsm.jpg' alt='gfglogo' className='rounded-full w-7 h-7' /> 
                JavaScript Mastery
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                <img src='./assets/apnacollege.jpg' alt='gfglogo' className='rounded-full w-7 h-7' /> 
                Apna College
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                <img src='./assets/Gs.jpg' alt='gfglogo' className='rounded-full w-7 h-7'/> 
                Gate Smashers
                {/* <span className='text-red-500 text-xl'><CiStreamOn /></span> */}
                <span className='text-red-500 text-xl'></span>
            </li>
        </ul>
        <h1 className='font-bold pt-3'>Explore</h1>
        <ul className='border-b-2 border-zinc-800 my-2 pb-4'>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< LiaFireAltSolid /></span> */}
                <span className='text-xl'></span>
                Trending
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< HiOutlineShoppingBag /></span> */}
                <span className='text-xl'></span>
                Shopping
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< BsMusicNote /></span> */}
                <span className='text-xl'></span>
                Music
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< PiFilmSlateBold /></span> */}
                <span className='text-xl'></span>
                Films
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><CiStreamOn /></span> */}
                <span className='text-xl'></span>
                Live
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><SiYoutubegaming /></span> */}
                <span className='text-xl'></span>
                Gaming
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><BsNewspaper /></span> */}
                <span className='text-xl'></span>
                News
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><AiOutlineTrophy /></span> */}
                <span className='text-xl'></span>
                Sport
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><AiOutlineBulb /></span> */}
                <span className='text-xl'></span>
                Learning
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><GiClothes /></span> */}
                <span className='text-xl'></span>
                Fashion & Beauty
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'><BiPodcast /></span> */}
                <span className='text-xl'></span>
                Podcasts
            </li>
        </ul>
        <h1 className='font-bold pt-3'>Media from Youtube</h1>
        <ul className='border-b-2 border-zinc-800 my-2 pb-4'>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-2xl text-red-700'><BsYoutube /></span> */}
                <span className='text-2xl text-red-700'></span>
                Youtube Premium
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-2xl text-red-700'><SiYoutubestudio /></span> */}
                <span className='text-2xl text-red-700'></span>
                Youtube Studio
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-2xl text-red-700'><SiYoutubemusic /></span> */}
                <span className='text-2xl text-red-700'></span>
                Youtube Music
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-2xl text-red-700'><TbBrandYoutubeKids /></span> */}
                <span className='text-2xl text-red-700'></span>
                Youtube Kids
            </li>
        </ul>
       <div className='border-b-2 border-zinc-800 my-2 pb-4'>
         <ul>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< AiOutlineSetting /></span> */}
                <span className='text-xl'></span>
                Settings
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< CgFlag /></span> */}
                <span className='text-xl'></span>
                Report history
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< TfiHelpAlt /></span> */}
                <span className='text-xl'></span>
                Help
            </li>
            <li className='text-sm text-gray-200 flex gap-4 items-center cursor-pointer hover:bg-zinc-900 py-3 px-2'>
                {/* <span className='text-xl'>< RiFeedbackLine /></span> */}
                <span className='text-xl'></span>
                Send feedback
            </li>
         </ul>
       </div>
       <div>
          {/* <div className='flex flex-wrap my-2 pb-4 text-sm text-gray-400'>
            <p className='pr-[5px] '>Press</p>
            <p className='pr-[5px] '>About</p>
            <p className='pr-[5px] '>Copyright</p>
            <p className='pr-[5px] '>Contact us</p>
            <p className='pr-[5px] '>Creator</p>
            <p className='pr-[5px] '>Advertise</p>
            <p className='pr-[5px] '>Developers</p>
          </div>
          <div className='flex flex-wrap my-2 pb-4 text-sm text-gray-400'>
            <p className='pr-[5px] '>Terms</p>
            <p className='pr-[5px] '>Privacy</p>
            <p className='pr-[5px] '>Policy & Safety</p>
            <p className='pr-[5px] '>How Youtube Works</p>
            <p className='pr-[5px] '>Test New Feature</p>
          </div> */}

          <div className='py-5 text-sm px-1 text-center font-light '>
            <p>Developed by <span className='text-rose-600 font-bold'>Shubhanshu Rao✌️</span></p>
          </div>
       </div>
    </div>
  )
}

export default Sidebar;