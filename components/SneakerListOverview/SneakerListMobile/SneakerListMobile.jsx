import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListMobile.module.scss";

const SneakerListMobile = ({ sneakersList }) => {
  const [sneakerView, setSneakerView] = useState();

  useEffect(() => setSneakerView(2), []);
  return (
    <div className={cn(styles.sneakerListMobile, styles.singleView)}>
      {sneakersList.map(({ sys, fields }) => (
        <SneakerCard key={sys?.id} {...fields} />
      ))}
    </div>
  );
};

export default SneakerListMobile;
