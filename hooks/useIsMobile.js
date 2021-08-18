import { useWindowSize } from "./useWindowSize";

const useIsMobile = () => {
  const size = useWindowSize();
  let hasSize;

  if (size.width === undefined) hasSize = null;

  if (size.width > 768) hasSize = false;

  return hasSize || true;
};

export default useIsMobile;
