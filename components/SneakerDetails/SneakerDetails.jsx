import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./SneakerDetails.module.scss";

const SneakerDetails = ({ fields }) => {
  const { featuredImage, description, title } = fields;

  const { url, details } = featuredImage?.fields?.file;
  const { width, height } = details?.image;

  return (
    <article className={styles.detailsContainer}>
      <figure className={styles.detailsImageContainer}>
        <Image
          src={`https:${url}`}
          width={width}
          height={height}
          alt="sneaker"
          className={styles.detailsImage}
        />
      </figure>

      <div className={styles.detailsDescription}>
        <h2>{title}</h2>
        {documentToReactComponents(description)}
      </div>
    </article>
  );
};

export default SneakerDetails;
