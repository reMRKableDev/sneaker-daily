import Image from "next/image";
import {
  Swiper as CardSwiper,
  SwiperSlide as CardSwiperSlide,
} from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

const CarouselContainer = () => {
  return (
    <CardSwiper
      slidesPerView={1}
      grabCursor={true}
      pagination={{
        clickable: true,
        renderBullet: (_, className) => {
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
          <CardSwiperSlide key={tnItem?.sys?.id}>
            <Image
              src={`https:${url}`}
              width={width}
              height={height}
              alt="sneaker"
              className={styles.cardImage}
            />
          </CardSwiperSlide>
        );
      })}
    </CardSwiper>
  );
};

export default CarouselContainer;
