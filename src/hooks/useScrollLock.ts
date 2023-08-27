import { useCallback } from "react";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    const isMobile = window.innerWidth <= 640;
    document.body.style.overflow = "hidden";
    if (isMobile) {
      document.body.style.paddingRight = "";
    } else {
      document.body.style.paddingRight = "17px";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  return { lockScroll, unlockScroll };
};
