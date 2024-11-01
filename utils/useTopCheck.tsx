import { useEffect, useState } from 'react';

const useScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState({
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setScrollPosition({ isAtTop, isAtBottom });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollTop;