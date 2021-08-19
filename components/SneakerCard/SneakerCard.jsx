import Link from "next/link";
import Image from "next/image";
import styles from "./SneakerCard.module.scss";

const SneakerCard = ({ title, thumbnail, slug }) => {
  const { cardContainer, cardTitle, cardTitleContainer, cardCallToAction } =
    styles;
  const { url, details } = thumbnail?.fields?.file;
  const { width, height } = details?.image;

  return (
    <article className={cardContainer}>
      <figure>
        <Image
          src={`https:${url}`}
          width={width}
          height={height}
          alt="sneaker"
        />
      </figure>

      <div className={cardTitleContainer}>
        <h4 className={cardTitle}>{title}</h4>
      </div>

      <div className={cardCallToAction}>
        <Link href={`/sneakers/${slug}`}>
          <a>More Details</a>
        </Link>
      </div>
    </article>
  );
};

export default SneakerCard;
