import Image from "next/image";
import {
  Swiper as CardSwiperContainer,
  SwiperSlide as CardSwiperSlide,
} from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

const CardSwiperWrapper = ({
  thumbnails,
  className,
  isSingleViewMobile,
  isDoubleViewMobile,
}) => {
  const setHeight = () => {
    if (isSingleViewMobile) {
      return "400px";
    } else if (isDoubleViewMobile) {
      return "200px";
    } else {
      return "300px";
    }
  };

  return (
    <CardSwiperContainer
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
        const { url } = tnItem?.fields?.file;

        return (
          <CardSwiperSlide key={tnItem?.sys?.id}>
            <div style={{ position: "relative", height: setHeight() }}>
              <Image
                src={`https:${url}`}
                fill
                style={{
                  objectFit: "contain",
                }}
                alt="sneaker"
                className={className}
              />
            </div>
          </CardSwiperSlide>
        );
      })}
    </CardSwiperContainer>
  );
};

export default CardSwiperWrapper;
