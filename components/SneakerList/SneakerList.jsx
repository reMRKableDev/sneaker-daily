import useIsDetectDevice from "../../hooks/useIsDetectDevice";
import SneakerCard from "../SneakerCard";
import styles from "./SneakerList.module.scss";

const SneakerList = ({ sneakersList }) => {
  const isDetectDevice = useIsDetectDevice();

  return isDetectDevice.isMobile() ? (
    <div>Hello hello</div>
  ) : (
    <div className={styles.sneakersContainer}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerList;
