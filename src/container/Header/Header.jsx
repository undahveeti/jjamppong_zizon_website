import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const vidRef = useRef();
  const videoSrc = process.env.PUBLIC_URL + '/frontpagevideo.mp4';

  useEffect(() => {
    const playVideo = () => {
      if (vidRef.current) {
        vidRef.current
          .play()
          .catch((error) => {
            console.log("Autoplay prevented:", error);
          });
      }
    };

    playVideo(); // Try to play on mount
    document.addEventListener("visibilitychange", playVideo); // Retry if tab becomes visible

    return () => document.removeEventListener("visibilitychange", playVideo);
  }, []);

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={videoSrc}
        type="video/mp4"
        loop
        muted
        playsInline
        controls={false}
      />
    </div>
  );
};

export default Header;
