import { useState, useEffect } from 'react';
const globalAny: any = global;

function getWindowDimensions() {
  if (!process.browser) {
    globalAny.window = {}
  }
  const width = globalAny.window?.innerWidth;
  const height = globalAny.window?.innerHeight;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ height: null, width: null });
  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
