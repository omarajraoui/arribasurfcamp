import { useState, useEffect } from 'react';

const useNavbarVisibility = (threshold = 1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > threshold);
    };

    // Add throttle for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Check initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [threshold]);

  return isVisible;
};

export default useNavbarVisibility;
