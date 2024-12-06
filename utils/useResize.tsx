import React, { useEffect, useState } from 'react';

export function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); 

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateMedia(); 
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isDesktop;
}

// function ShowWindowDimensions(props:any) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }