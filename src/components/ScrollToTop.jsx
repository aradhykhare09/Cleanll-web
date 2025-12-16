import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Current Path (URL) nikalne ke liye
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname change hoga, ye window ko top pe bhej dega
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array me pathname hai

  return null; // Ye render me kuch nahi dikhayega
};

export default ScrollToTop;