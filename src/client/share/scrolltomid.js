import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToMid() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 500);
  }, [pathname]);

  return null;
}
