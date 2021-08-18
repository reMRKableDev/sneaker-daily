import useIsMobile from "../../hooks/useIsMobile";
import SneakerCard from "../SneakerCard";
import styles from "./SneakerList.module.scss";

const SneakerList = ({ sneakersList }) => {
  const isMobileDevice = useIsMobile();

  return isMobileDevice.isMobile() ? (
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
