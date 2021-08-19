import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListDesktop.module.scss";

const SneakerListDesktop = ({ sneakersList }) => {
  const [sneakerView, setSneakerView] = useState();

  useEffect(() => setSneakerView(4), []);

  return (
    <div className={cn(styles.sneakerListDesktop, styles.quadrupleView)}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerListDesktop;
