import { useEffect, useState } from "react";
import cn from "classnames";
import SneakerCard from "../../SneakerCard";
import styles from "./SneakerListDesktop.module.scss";

const SneakerListDesktop = ({ sneakersList }) => {
  const [isDoubleView, setIsDoubleView] = useState(false);
  const [isQuadrupleView, setIsQuadrupleView] = useState(false);

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

  useEffect(() => {
    if (
      !localStorage.getItem("currentView") ||
      localStorage.getItem("currentView") === "isQuadruple"
    ) {
      setIsQuadrupleView(true);
    } else {
      setIsDoubleView(true);
    }
  }, []);

  return (
    isViewSet && (
      <div className={cn(styles.sneakerListDesktopContainer)}>
        <div className={styles.sneakerDisplayViewsContainer}>
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
          <div
            className={styles.sneakerDisplayQuadrupleView}
            role="button"
            tabIndex={0}
            onClick={() => handleToggleQuadrupleView()}
            onKeyPress={() => handleToggleQuadrupleView()}
          >
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isQuadrupleView,
              })}
            ></div>
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isQuadrupleView,
              })}
            ></div>
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isQuadrupleView,
              })}
            ></div>
            <div
              className={cn(styles.box, {
                [styles.selectedSneakerView]: isQuadrupleView,
              })}
            ></div>
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
