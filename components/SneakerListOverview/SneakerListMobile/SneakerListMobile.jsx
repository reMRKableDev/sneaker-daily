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

  const isViewSet = isSingleView || isDoubleView;

  useEffect(() => setIsSingleView(true), []);

  return (
    isViewSet && (
      <div className={cn(styles.sneakerListMobileContainer)}>
        <div className={styles.sneakerDisplayViewsContainer}>
          <div
            className={styles.sneakerDisplaySingleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleSingleView()}
            onKeyPress={() => handleToggleSingleView()}
          >
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isSingleView,
              })}
            ></div>
          </div>
          <div
            className={styles.sneakerDisplayDoubleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleDoubleView()}
            onKeyPress={() => handleToggleDoubleView()}
          >
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isDoubleView,
              })}
            ></div>
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isDoubleView,
              })}
            ></div>
          </div>
        </div>

        <div
          className={cn({
            [styles.sneakerListSingleView]: isSingleView,
            [styles.sneakerListDoubleView]: isDoubleView,
          })}
        >
          {sneakersList.map(({ sys, fields }) => (
            <SneakerCard
              key={sys?.id}
              {...fields}
              isSingleViewMobile={isSingleView}
              isDoubleViewMobile={isDoubleView}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SneakerListMobile;
