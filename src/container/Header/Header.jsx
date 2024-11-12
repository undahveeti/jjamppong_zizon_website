import React, { useEffect, useRef } from 'react';
import { meal } from '../../constants';
import './Header.css';


const Header = () => {
  const vidRef = useRef();


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
        src={meal}
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
