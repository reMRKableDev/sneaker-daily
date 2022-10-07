import { useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperImage, getSwiperImage] = useState(null);
  const [mouseEntered, setMouseEntered] = useState(false);

  const handleShowNextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    swiperImage.slideNext();
    setActiveSlide((slide) => slide + 1);
  };
  const handleShowPreviousImage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (swiperImage !== null && activeSlide > 0) {
      swiperImage.slidePrev();
      setActiveSlide((slide) => slide - 1);
    }
  };

  const params = {
    slidesPerView: 1,
  };

  return (
    <article
      className={cn(styles.cardContainer, {
        [styles.cardContainerWidthSingleViewMobile]: isSingleViewMobile,
        [styles.cardContainerWidthDoubleViewMobile]: isDoubleViewMobile,
      })}
    >
      <div
        className={styles.cardImageContainer}
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
      >
        <Swiper {...params} getSwiper={getSwiperImage}>
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
        <div className={styles.cardImageArrowsContainer}>
          <div
            className={cn(styles.cardImageNext, {
              [styles.cardImageArrowShow]: mouseEntered,
            })}
            onClick={(e) => {
              handleShowNextImage(e);
            }}
            onKeyPress={(e) => {
              handleShowNextImage(e);
            }}
            role="button"
            tabIndex={0}
          >
            <span className="swiper-button-prev"> Next</span>
          </div>
          <div
            className={cn(styles.cardImagePrev, {
              [styles.cardImageArrowShow]: mouseEntered,
            })}
            onClick={(e) => {
              handleShowPreviousImage(e);
            }}
            onKeyPress={(e) => {
              handleShowPreviousImage(e);
            }}
            role="button"
            tabIndex={0}
          >
            <span className="swiper-button-next">Prev</span>
          </div>
        </div>
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
