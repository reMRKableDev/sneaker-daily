import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListMobile.module.scss";

const SneakerListMobile = ({ sneakersList }) => {
  return (
    <div>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerListMobile;
