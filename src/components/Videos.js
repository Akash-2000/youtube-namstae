import React from "react";

const Videos = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="rounded-md shadow-lg w-80 mx-5 p-2">
      <div className="w-full rounded-lg">
        <img
          src={thumbnails?.medium?.url}
          className="w-full rounded-lg"
          height={thumbnails?.medium?.height}
        />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="font-semibold">{channelTitle}</p>
        <p className="text-gray-500">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default Videos;
