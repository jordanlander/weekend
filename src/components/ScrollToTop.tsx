import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Ensure the element exists before scrolling
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0 });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
