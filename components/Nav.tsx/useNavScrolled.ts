import { useEffect, useState } from "react";

export const useNavScrolled = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
    return scrolled
};
