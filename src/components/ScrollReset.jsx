import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReset = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // This executes before the browser paints the new route content
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollReset;