import React from 'react';

import { meal } from '../../constants';
import './Header.css';
import zizon from '../../assets/zizon.PNG';  // Import your logo here (adjust the path as needed)

const Header = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          <img
            src={zizon}
            alt="play/pause logo"
            style={{
              width: '300px',  // Adjust the size of the logo
              height: '100px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
