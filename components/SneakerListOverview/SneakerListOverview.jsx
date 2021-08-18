import useIsDetectDevice from "../../hooks/useIsDetectDevice";
import SneakerCard from "../SneakerCard";
import SneakerListDesktop from "./SneakerListDesktop";
import SneakerListMobile from "./SneakerListMobile";
import styles from "./SneakerListOverview.module.scss";

const SneakerListOverview = ({ sneakersList }) => {
  const isDetectDevice = useIsDetectDevice();

  return (
    <div className={styles.sneakersContainer}>
      {isDetectDevice.isMobile() ? (
        <SneakerListMobile sneakersList={sneakersList} />
      ) : (
        <SneakerListDesktop sneakersList={sneakersList} />
      )}
    </div>
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
