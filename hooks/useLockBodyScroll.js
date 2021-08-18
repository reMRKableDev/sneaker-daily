import { useLayoutEffect } from "react";

const useLockBodyScroll = (isToggled) => {
  useLayoutEffect(() => {
    if (isToggled) {
      const documentBody = document.body;
      const { overflow } = documentBody.style;

      const bodyOverflow = window.getComputedStyle(documentBody).overflow;

      overflow = "hidden";

      return () => (overflow = bodyOverflow);
    }
  }, [isToggled]);
};

export default useLockBodyScroll;
