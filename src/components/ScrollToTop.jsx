import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instantly move to the top before the new page renders
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;