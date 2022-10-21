import Link from "next/link";
import Image from "next/image";
import { EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./SneakerCard.module.scss";

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
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          modules={[EffectCreative, Pagination]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: ["-120%", 0, -500],
            },
            next: {
              translate: ["120%", 0, -500],
            },
          }}
        >
          {thumbnails.map((tnItem) => {
            const { url, details } = tnItem?.fields?.file;
            const { width, height } = details?.image;

            return (
              <SwiperSlide key={tnItem?.sys?.id}>
                <Image
                  src={`https:${url}`}
                  width={width}
                  height={height}
                  alt="sneaker"
                  className={styles.cardImage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
