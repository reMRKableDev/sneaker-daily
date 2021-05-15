import Link from "next/link";
import Image from "next/image";

import styles from "./SneakerCard.module.css";

const SneakerCard = ({ title, thumbnail, slug }) => {
  const { card, content, info, actions } = styles;

  const { url, details } = thumbnail?.fields?.file;
  const { width, height } = details?.image;

  return (
    <div className={card}>
      <div className="featured">
        <Image src={`https:${url}`} width={width} height={height} />
      </div>
      <div className={content}>
        <article className={info}>
          <h4>{title}</h4>
        </article>
      </div>
      <div className={actions}>
        <Link href={`/sneakers/${slug}`}>
          <a>More details</a>
        </Link>
      </div>
    </div>
  );
};

export default SneakerCard;
