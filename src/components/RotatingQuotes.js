import React, { useState, useEffect, useCallback } from 'react';
import './RotatingQuotes.css'; // Import CSS for animations and styling

const quotes = [
  'Open resource education',
  'Open source tools',
  'Learning paths',
  'Study rooms',
  'Chat rooms',
  'Custom tools',
];

// Custom hook for managing the quotes rotation
function useRotatingQuotes(isPaused, quotes) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change the quote every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup on unmount or pause
  }, [isPaused, quotes.length]);

  return quotes[currentQuoteIndex];
}

const RotatingQuotes = React.memo(() => {
  const [isPaused, setIsPaused] = useState(false);
  const currentQuote = useRotatingQuotes(isPaused, quotes);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <h1
    className="quote" 
    
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-live="polite" // Improve accessibility for dynamic content
    >
      {currentQuote}
    </h1>
  );
});

export default RotatingQuotes;
