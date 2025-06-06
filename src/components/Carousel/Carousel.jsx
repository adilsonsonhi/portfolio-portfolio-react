import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css"; // CSS Module import
import { NavLink } from "react-router-dom";

const Carousel = ({ products }) => {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // State to control pause
  const scrollSpeed = 1; // Scroll speed (in pixels per frame)

  // Function to animate the scroll
  const animateScroll = () => {
    if (trackRef.current && !isPaused) {
      // Updates the track position
      trackRef.current.style.transform = `translateX(-${trackRef.current.scrollPos || 0}px)`;

      // Increments the scroll position
      trackRef.current.scrollPos = (trackRef.current.scrollPos || 0) + scrollSpeed;

      // If it reaches the end, resets the position seamlessly
      const trackWidth = trackRef.current.scrollWidth / 2; // Total width of the track (duplicated items)
      if (trackRef.current.scrollPos >= trackWidth) {
        trackRef.current.scrollPos = 0;
      }
    }

    // Continues the animation
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  // Starts the animation 2 seconds after the component is mounted (only on page load)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Sets the initial position of the track to 40px
      if (trackRef.current) {
        trackRef.current.scrollPos = -90; // Starts at 40px
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    }, 50); // 2000 milliseconds = 2 seconds

    // Cleanup when the component unmounts
    return () => {
      clearTimeout(timeoutId); // Clears the setTimeout
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current); // Cancels the animation
      }
    };
  }, []); // Empty dependency array: runs only when component mounts

  return (
    <div className={styles.container}>
      <div className={styles.track} ref={trackRef}>
        {/* Renders the items multiple times to create an infinite loop */}
        {[...Array(10)].map((_, loopIndex) =>
          products.map((product, index) => (
            <NavLink
              to={product.link}
              target="blank"
              key={`${loopIndex}-${index}`}
              className={styles.card}
              onMouseEnter={() => setIsPaused(true)} // Pause on hover
              onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
            >
              <img src={product.image[0]} alt={product.name} />
              <div className={styles.description}>
                <h3>{product.name}</h3>
                <h5>{product.category}</h5>
                <p>{product.description}</p>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default Carousel;
