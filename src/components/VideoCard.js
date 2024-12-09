import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_API_KEY } from "./utils/constant";
import Videos from "./Videos";

const VideoCard = () => {
  const [videoList, setVideoList] = useState();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_KEY);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setVideoList(json.items);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex flex-wrap m-auto">
      {videoList?.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id}>
          <Videos video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCard;
