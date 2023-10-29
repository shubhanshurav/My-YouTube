import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); //HW -> Read more about useSearchParams

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-row w-[100%]">
      <div className="flex flex-col px-2 w-[65%]">
        <div> 
          <iframe
            width="800"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get('v')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >         
          </iframe>
        </div>
        <div className="w-full h-screen overflow-y-auto">
           <CommentsContainer />
        </div>
      </div>
      <div className="w-[33%]">
        <div>
          <LiveChat />
        </div>
        <div className="h-screen overflow-y-auto">
          <VideoContainer />
        </div>
      </div>
   </div>
  );
};

export default WatchPage;
