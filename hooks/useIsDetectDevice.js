const getDevice = (incomingUserAgent) => {
  const matchUserAgent = (compareValue) =>
    Boolean(incomingUserAgent.match(compareValue));

  const isAndroid = () => matchUserAgent(/Android/i);
  const isIos = () => matchUserAgent(/iPhone|iPad|iPod/i);
  const isOpera = () => matchUserAgent(/Opera Mini/i);
  const isWindows = () => matchUserAgent(/IEMobile/i);
  const isSSR = () => matchUserAgent(/SSR/i);

  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};

const useIsDetectDevice = () => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  return getDevice(userAgent);
};

export default useIsDetectDevice;
