import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListDesktop.module.scss";

const SneakerListDesktop = ({ sneakersList }) => {
  const { sneakerListDesktop, quadrupleView } = styles;
  return (
    <div className={(sneakerListDesktop, quadrupleView)}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerListDesktop;
