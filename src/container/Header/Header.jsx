import React, { useEffect, useRef, useState } from 'react';
import zizonImage from '../../assets/zizon.png'; // Import zizon image
import './Header.css';

const Header = () => {
  const vidRef = useRef();
  const [videoSrc, setVideoSrc] = useState(""); // State to manage video source
  const [playVideo, setPlayVideo] = useState(false); // State to manage play/pause toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if screen is mobile
  const [isLoading, setIsLoading] = useState(true); // State to track video loading

  // Update the video source based on screen size
  useEffect(() => {
    const updateVideoSource = () => {
      const isMobileScreen = window.innerWidth <= 768;
      const mobileVideoSrc = process.env.PUBLIC_URL + '/editedsnip.mp4';
      const desktopVideoSrc = process.env.PUBLIC_URL + '/frontpagevideo.mp4';

      const selectedVideoSrc = isMobileScreen ? mobileVideoSrc : desktopVideoSrc;
      setIsMobile(isMobileScreen);
      setVideoSrc(selectedVideoSrc);

      if (vidRef.current) {
        vidRef.current.pause();
        vidRef.current.src = selectedVideoSrc; // Directly set video source
        vidRef.current.load(); // Reload video
      }
    };

    updateVideoSource(); // Set initial video source
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  // Handle video readiness
  const handleVideoReady = () => {
    setIsLoading(false); // Hide the loading indicator
    if (!isMobile && vidRef.current) {
      vidRef.current.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    }
  };

  // Play/pause toggle for mobile
  const togglePlayPause = () => {
    setPlayVideo(!playVideo);
    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <div className="app__video">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="app__video-loading">
          <div className="spinner"></div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={vidRef}
        loop
        muted={!isMobile} // Only unmute for desktop
        playsInline
        controls={false}
        preload="metadata"
        className={playVideo ? 'video--playing' : 'video--paused'} // Conditional class
        onCanPlayThrough={handleVideoReady} // Video is ready to play
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button and Logo for Mobile */}
      {isMobile && !playVideo && (
        <div className="app__video-overlay flex__center">
          <div className="app__logo-container">
            <img
              src={zizonImage}
              alt="Zizon Logo"
              className="app__logo"
            />
            <div
              className="app__play-button flex__center"
              onClick={togglePlayPause}
            >
              Play
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
