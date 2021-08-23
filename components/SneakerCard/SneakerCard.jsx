import Link from "next/link";
import Swiper from "react-id-swiper";
import Image from "next/image";
import cn from "classnames";
import styles from "./SneakerCard.module.scss";

const SneakerCard = ({
  title,
  thumbnail,
  thumbnails,
  slug,
  isSingleViewMobile,
  isDoubleViewMobile,
}) => {
  const params = {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <article
      className={cn(styles.cardContainer, {
        [styles.cardContainerWidthSingleViewMobile]: isSingleViewMobile,
        [styles.cardContainerWidthDoubleViewMobile]: isDoubleViewMobile,
      })}
    >
      <div className={styles.cardImageContainer}>
        <Swiper {...params}>
          {thumbnails.map((tnItem) => {
            const { url, details } = tnItem?.fields?.file;
            const { width, height } = details?.image;

            return (
              <figure key={tnItem?.sys?.id}>
                <Image
                  src={`https:${url}`}
                  width={width}
                  height={height}
                  alt="sneaker"
                  className={styles.cardImage}
                />
              </figure>
            );
          })}
        </Swiper>
        <>
          <button className="swiper-button-prev">Prev</button>
          <button className="swiper-button-next">Next</button>
        </>
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
        <Link href={`/sneakers/${slug}`}>
          <a>More Details</a>
        </Link>
      </div>
    </article>
  );
};

export default SneakerCard;
