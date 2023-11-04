import Link from "next/link";
import cn from "classnames";
import styles from "./SneakerCard.module.scss";

import CardSwiperWrapper from "../CardSwiperWrapper";

const SneakerCard = ({
  title,
  thumbnails,
  slug,
  isSingleViewMobile,
  isDoubleViewMobile,
}) => {
  return (
    <article
      className={cn(styles.cardContainer, {
        [styles.cardContainerWidthSingleViewMobile]: isSingleViewMobile,
        [styles.cardContainerWidthDoubleViewMobile]: isDoubleViewMobile,
      })}
    >
      <div className={styles.cardImageContainer}>
        <CardSwiperWrapper
          thumbnails={thumbnails}
          className={styles.cardImage}
          isDoubleViewMobile={isDoubleViewMobile}
        />
      </div>

      <div className={styles.cardTitleContainer}>
        <h4
          className={cn(styles.cardTitle, {
            [styles.cardTitleSingleViewMobile]: isSingleViewMobile,
            [styles.cardTitleDoubleViewMobile]: isDoubleViewMobile,
          })}
        >
          {title}
        </h4>
      </div>

      <div
        className={cn(styles.cardCallToAction, {
          [styles.cardCallToActionSingleViewMobile]: isSingleViewMobile,
          [styles.cardCallToActionDoubleViewMobile]: isDoubleViewMobile,
        })}
      >
        <Link href={`/sneakers/${slug}`}>More Details</Link>
      </div>
    </article>
  );
};

export default SneakerCard;
