/**
 * Custom React hook to detect the user's device type.
 *
 * This hook uses the user agent string to determine if the current device is a mobile device,
 * a desktop, or if the code is being executed on the server (SSR - Server-Side Rendering).
 *
 * The `getDevice` function encapsulates the logic for detecting different device types and
 * conditions based on the provided user agent string.
 *
 * Returns:
 *   - isMobile: Function that returns true if the user agent matches a mobile device.
 *   - isDesktop: Function that returns true if the user agent matches a desktop device.
 *   - isAndroid: Function that returns true if the user agent matches an Android device.
 *   - isIos: Function that returns true if the user agent matches an iOS device (iPhone, iPad, iPod).
 *   - isSSR: Function that returns true if the code is running in a server-side rendering context.
 *
 * Example usage:
 *   const { isMobile, isDesktop, isAndroid, isIos, isSSR } = useIsDetectDevice();
 *
 *   if (isMobile()) {
 *     // Logic for mobile devices
 *   }
 *
 * Note:
 *   This hook should be used in a browser environment where the `navigator` object is available.
 *   When used in a server-side rendering context, the hook defaults to assuming it is on a server (SSR).
 */

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
