import React, { useContext } from "react";
import "./video.css";
import { ReactComponent as PlusIcon } from "../../img/plus-icon.svg";
import { MyContext } from "../telas/browse";

const Video = ({ id }) => {
  const { setVideoInfo } = useContext(MyContext);
  return id<0 ? (
    ""
  ) : (
    <div className="browse-ctn-video" style={{ top: window.scrollY }}>
      <div
        className="close-video"
        onClick={({ target }) => {
          target.closest(".browse-ctn-video");
          setVideoInfo({});
        }}
      >
        <PlusIcon />
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
};

export default Video;
