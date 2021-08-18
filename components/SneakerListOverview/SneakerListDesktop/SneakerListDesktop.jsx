import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListDesktop.module.scss";

const SneakerListDesktop = ({ sneakersList }) => {
  return (
    <div className={styles.sneakerListDesktop}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerListDesktop;
