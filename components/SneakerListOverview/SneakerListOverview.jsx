import useIsDetectDevice from "../../hooks/useIsDetectDevice";
import SneakerListDesktop from "./SneakerListDesktop";
import SneakerListMobile from "./SneakerListMobile";

const SneakerListOverview = ({ sneakersList }) => {
  const isDetectDevice = useIsDetectDevice();

  return isDetectDevice.isMobile() ? (
    <SneakerListMobile sneakersList={sneakersList} />
  ) : (
    <SneakerListDesktop sneakersList={sneakersList} />
  );
};

export default SneakerListOverview;
