import Link from "next/link";
import Image from "next/image";

import styles from "./SneakerCard.module.scss";

const SneakerCard = ({ title, thumbnail, slug }) => {
  const { card, content, info, actions } = styles;

  const { url, details } = thumbnail?.fields?.file;
  const { width, height } = details?.image;

  return (
    <article className={`flex-column ${card}`}>
      <figure className="featured">
        <Image
          src={`https:${url}`}
          width={width}
          height={height}
          alt="sneaker"
        />
      </figure>
      <div className={content}>
        <article className={info}>
          <h4>{title}</h4>
        </article>
      </div>
      <div className={actions}>
        <Link href={`/sneakers/${slug}`}>
          <a>More Details</a>
        </Link>
      </div>
    </article>
  );
};

export default SneakerCard;
