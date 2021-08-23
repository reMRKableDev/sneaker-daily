import { useWindowWidth } from "@react-hook/window-size/throttled";
import useIsDetectDevice from "../../hooks/useIsDetectDevice";
import SneakerListDesktop from "./SneakerListDesktop";
import SneakerListMobile from "./SneakerListMobile";

const SneakerListOverview = ({ sneakersList }) => {
  const isDetectDevice = useIsDetectDevice();
  const onlyDeviceWidth = useWindowWidth();

  return isDetectDevice.isMobile() && onlyDeviceWidth < 768 ? (
    <SneakerListMobile sneakersList={sneakersList} />
  ) : (
    <SneakerListDesktop sneakersList={sneakersList} />
  );
};

export default SneakerListOverview;
