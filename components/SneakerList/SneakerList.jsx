import SneakerCard from "../SneakerCard";
import styles from "./SneakerList.module.scss";

const SneakerList = ({ sneakersList }) => (
  <div className={styles.sneakersContainer}>
    {sneakersList.map(({ sys, fields }) => (
      <SneakerCard key={sys?.id} {...fields} />
    ))}
  </div>
);

export default SneakerList;
