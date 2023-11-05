import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListDesktop.module.scss";

const SneakerListDesktop = ({ sneakersList }) => {
  const [isDoubleView, setIsDoubleView] = useState(false);
  const [isQuadrupleView, setIsQuadrupleView] = useState(false);

  useEffect(() => {
    try {
      const storedView = localStorage.getItem("currentView");
      if (!storedView || storedView === "isQuadruple") {
        setIsQuadrupleView(true);
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
              (isDoubleView && count === 2) || (isQuadrupleView && count === 4),
          })}
        ></div>
      );
    }
    return boxes;
  };

  const handleToggleDoubleView = () => {
    setIsQuadrupleView(false);
    setIsDoubleView(true);
    localStorage.setItem("currentView", "isDouble");
  };

  const handleToggleQuadrupleView = () => {
    setIsDoubleView(false);
    setIsQuadrupleView(true);
    localStorage.setItem("currentView", "isQuadruple");
  };

  const isViewSet = isDoubleView || isQuadrupleView;

  return (
    isViewSet && (
      <div className={cn(styles.sneakerListDesktopContainer)}>
        <div className={styles.sneakerDisplayViewsContainer}>
          <div
            className={styles.sneakerDisplayDoubleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleDoubleView()}
          >
            {renderSneakerBoxes(2)}
          </div>
          <div
            className={styles.sneakerDisplayQuadrupleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleQuadrupleView()}
          >
            {renderSneakerBoxes(4)}
          </div>
        </div>

        <div
          className={cn({
            [styles.doubleView]: isDoubleView,
            [styles.quadrupleView]: isQuadrupleView,
          })}
        >
          {sneakersList.map(({ sys, fields }) => (
            <SneakerCard key={sys?.id} {...fields} />
          ))}
        </div>
      </div>
    )
  );
};

export default SneakerListDesktop;
