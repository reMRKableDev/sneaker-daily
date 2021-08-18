import useIsDetectDevice from "../../hooks/useIsDetectDevice";
import SneakerCard from "../SneakerCard";
import SneakerListDesktop from "./SneakerListDesktop";
import SneakerListMobile from "./SneakerListMobile";

const SneakerListOverview = ({ sneakersList }) => {
  const isDetectDevice = useIsDetectDevice();

  return isDetectDevice.isMobile() ? (
    <SneakerListMobile sneakerList={sneakersList} />
  ) : (
    <SneakerListDesktop sneakerList={sneakersList} />
  );
};

export default SneakerListOverview;

/* 
<div className={styles.sneakersContainer}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
*/