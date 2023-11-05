import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListMobile.module.scss";

const SneakerListMobile = ({ sneakersList }) => {
  const [isSingleView, setIsSingleView] = useState(false);
  const [isDoubleView, setIsDoubleView] = useState(false);

  useEffect(() => {
    try {
      const storedView = localStorage.getItem("currentView");
      if (!storedView || storedView === "isSingle") {
        setIsSingleView(true);
      } else {
        setIsDoubleView(true);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const renderSneakerBoxes = (count) => {
    const boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(
        <div
          key={i}
          className={cn(styles.box, {
            [styles.selectedSneakerView]:
              (isSingleView && count === 1) || (isDoubleView && count === 2),
          })}
        ></div>
      );
    }
    return boxes;
  };

  const handleToggleSingleView = () => {
    setIsDoubleView(false);
    setIsSingleView(true);
    localStorage.setItem("currentView", "isSingle");
  };

  const handleToggleDoubleView = () => {
    setIsSingleView(false);
    setIsDoubleView(true);
    localStorage.setItem("currentView", "isDouble");
  };

  const isViewSet = isSingleView || isDoubleView;

  return (
    isViewSet && (
      <div className={cn(styles.sneakerListMobileContainer)}>
        <div className={styles.sneakerDisplayViewsContainer}>
          <div
            className={styles.sneakerDisplaySingleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleSingleView()}
          >
            {renderSneakerBoxes(1)}
          </div>
          <div
            className={styles.sneakerDisplayDoubleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleDoubleView()}
          >
            {renderSneakerBoxes(2)}
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
