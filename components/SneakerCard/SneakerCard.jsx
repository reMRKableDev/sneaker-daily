import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import styles from "./SneakerCard.module.scss";

const SneakerCard = ({
  title,
  thumbnail,
  slug,
  isSingleViewMobile,
  isDoubleViewMobile,
}) => {
  const { url, details } = thumbnail?.fields?.file;
  const { width, height } = details?.image;

  return (
    <article className={styles.cardContainer}>
      <figure>
        <Image
          src={`https:${url}`}
          width={width}
          height={height}
          alt="sneaker"
          className={styles.cardImage}
        />
      </figure>

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
