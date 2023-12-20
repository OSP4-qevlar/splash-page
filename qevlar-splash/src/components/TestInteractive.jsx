import React, { useRef, useEffect } from "react";
import anime from "animejs";

const SliderComponent = () => {
  // References to the DOM elements we'll need to animate
  const sliderRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Initialize the anime.js animation
    const animation = anime.timeline({
      targets: sliderRef.current,
      autoplay: false, // We'll control playback manually
      // Add more parameters according to the anime.js documentation
    });

    // Add animations to the timeline
    animation.add({
      value: [0, 100], // Example values, adjust as necessary
      duration: 1000,
      update: (anim) => {
        // Update the progress bar as the animation runs
        if (progressRef.current) {
          progressRef.current.style.width = anim.progress + "%";
        }
      },
    });
    // You can add more animations or callbacks here

    // Return a cleanup function to stop the animation if the component unmounts
    return () => animation.pause();
  }, []);

  // Event handlers for controlling the animation
  const handlePlay = () => {
    anime.timeline().play();
  };

  const handlePause = () => {
    anime.timeline().pause();
  };

  const handleReverse = () => {
    anime.timeline().reverse();
  };

  // Render the component
  return (
    <div>
      <div ref={sliderRef} className="slider">
        {/* Other elements like the slider handle go here */}
        <div ref={progressRef} className="progress" />
      </div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReverse}>Reverse</button>
      {/* Add other controls as needed */}
    </div>
  );
};

export default SliderComponent;
