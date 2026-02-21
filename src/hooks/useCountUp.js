import { useEffect, useState, useRef } from 'react';

/**
 * Hook to animate number counting from old value to new value
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @returns {number} Current animated value
 */
export const useCountUp = (end, duration = 800) => {
  const [count, setCount] = useState(end);
  const prevEndRef = useRef(end);
  const frameRef = useRef();
  const startTimeRef = useRef();

  useEffect(() => {
    // If the end value hasn't changed, don't animate
    if (prevEndRef.current === end) {
      return;
    }

    const startValue = prevEndRef.current;
    const endValue = end;
    const startTime = Date.now();
    startTimeRef.current = startTime;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (endValue - startValue) * easeOut;
      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        prevEndRef.current = endValue;
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return count;
};
