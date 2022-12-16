import React, { useState } from "react";
const Video = () => {
  const [hint, setHint] = useState(false);
  const onClick = (event) => {
    setHint((hidden) => !hidden);
  };

  return (
    <div>
      <button onClick={onClick}>Hint</button>
      <iframe
        className={hint ? "visible" : "hidden"}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4PhbUhrI4KE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
