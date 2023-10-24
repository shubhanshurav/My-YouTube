import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); //HW -> Read more about useSearchParams

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width="800"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get('v')}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
    </div> 

    <CommentsContainer />
   </div>
  );
};

export default WatchPage;
