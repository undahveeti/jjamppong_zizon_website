import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

const Header = () => {
  const vidRef = useRef();
  const [videoSrc, setVideoSrc] = useState(""); // State to manage video source
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if screen is mobile
  const [isLoading, setIsLoading] = useState(true); // State to track video loading

  // Update the video source based on screen size
  useEffect(() => {
    const updateVideoSource = () => {
      const isMobileScreen = window.innerWidth <= 768;
      const mobileVideoSrc = process.env.PUBLIC_URL + '/finaleditsnip.mp4';
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

  // Prevent video from pausing during scrolling
  useEffect(() => {
    const preventPause = () => {
      if (vidRef.current) {
        vidRef.current.play().catch((error) => {
          console.error("Error resuming video:", error);
        });
      }
    };

    if (vidRef.current) {
      vidRef.current.addEventListener('pause', preventPause);
    }

    return () => {
      if (vidRef.current) {
        vidRef.current.removeEventListener('pause', preventPause);
      }
    };
  }, []);

  // Handle video readiness
  const handleVideoReady = () => {
    setIsLoading(false); // Hide the loading indicator
    if (vidRef.current) {
      vidRef.current.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
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
        muted // Always muted for autoplay
        playsInline
        preload="metadata"
        className="video--playing"
        onCanPlayThrough={handleVideoReady} // Video is ready to play
        onTouchStart={(e) => e.preventDefault()} // Prevent touch interruptions
        onTouchMove={(e) => e.preventDefault()}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Header;
