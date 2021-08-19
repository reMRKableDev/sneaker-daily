import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListMobile.module.scss";

const SneakerListMobile = ({ sneakersList }) => {
  const [isSingleView, setIsSingleView] = useState(false);
  const [isDoubleView, setIsDoubleView] = useState(false);

  const handleToggleSingleView = () => {
    setIsDoubleView(false);
    setIsSingleView(true);
  };

  const handleToggleDoubleView = () => {
    setIsSingleView(false);
    setIsDoubleView(true);
  };

  useEffect(() => setIsSingleView(true), []);

  return (
    <div className={styles.sneakerListMobileContainer}>
      <div className={styles.sneakerDisplayViewsContainer}>
        <div
          className={styles.sneakerDisplaySingleView}
          role="button"
          tabIndex={0}
          onClick={() => handleToggleSingleView()}
          onKeyPress={() => handleToggleSingleView()}
        >
          <div className={styles.box}></div>
        </div>
        <div
          className={styles.sneakerDisplayDoubleView}
          role="button"
          tabIndex={0}
          onClick={() => handleToggleDoubleView()}
          onKeyPress={() => handleToggleDoubleView()}
        >
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </div>

      <div
        className={cn({
          [styles.sneakerListSingleView]: isSingleView,
          [styles.sneakerListDoubleView]: isDoubleView,
        })}
      >
        {sneakersList.map(({ sys, fields }) => (
          <SneakerCard key={sys?.id} {...fields} />
        ))}
      </div>
    </div>
  );
};

export default SneakerListMobile;
