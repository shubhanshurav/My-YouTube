import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
import LiveChat from "../live-chat/LiveChat";
import ButtonList from "../ButtonList";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); //HW -> Read more about useSearchParams
  const youtubeVideoId = searchParams.get("v");
  const youtubeVideoTitle = searchParams.get("title");
  const youtubeVideoChannelTitle = searchParams.get("channelTitle");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex md:flex-row flex-col w-[100%]">
      <div className="flex flex-col px-2 w-[65%]">
        <div>
          <iframe
            className="w-[390px] md:w-[800px] h-[300px] md:h-[500px] rounded-lg"
            src={"https://www.youtube.com/embed/" + youtubeVideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pt-5 px-2">
          <div className="w-fit">
            <h1 className="text-white text-lg font-bold">
              {youtubeVideoTitle}
            </h1>
          </div>
          <div className="flex items-center gap-14 md:gap-9 py-5">
            <div className="flex items-center gap-1">
              <img
                src="./assets/user.png"
                alt="channelLogo"
                className="w-10 h-10 bg-white rounded-full"
              />
              <h1 className="text-white px-1 font-bold w-fit text-md">
                {youtubeVideoChannelTitle}
              </h1>
            </div>
            <div className="flex">
              <button className="border hidden md:block text-sm font-bold px-4 py-2 rounded-full mx-3">
                Join
              </button>
              <button className="flex px-4 text-sm font-bold py-1 md:py-2 rounded-full border">
                <span>🔔</span>Subscribed
              </button>
            </div>
            <div className="flex px-2 md:px-0">
              <div className="md:flex hidden py-2 px-2 border rounded-full">
                <button className="text-sm font-bold px-2 border-r">
                  👍 1.8k
                </button>
                <button className="text-sm font-bold px-1">👎</button>
              </div>
              <button className="px-4  hidden md:block py-2 text-sm font-bold rounded-full border mx-3">
                Share
              </button>
              <button className="border px-4 text-sm font-bold py-1 md:py-2 rounded-full">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen md:w-[800px] h-screen overflow-y-auto">
          <CommentsContainer />
        </div>
      </div>
      <div className="w-screen px-5 md:px-7 md:w-[450px]">
        <div>
          <LiveChat />
        </div>
        <div className="h-screen overflow-y-scroll overflow-x-scroll">
          <div className="sticky top-0 bg-black py-7">
            <ButtonList />
          </div>
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
