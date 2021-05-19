import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SneakerDetails = ({ fields }) => {
  const { featuredImage, description, title } = fields;

  const { url, details } = featuredImage?.fields?.file;
  const { width, height } = details?.image;

  return (
    <article>
      <header className="banner">
        <Image src={`https:${url}`} width={width} height={height} />
        <h2>{title}</h2>
      </header>
      <div className="description">
        {documentToReactComponents(description)}
      </div>
    </article>
  );
};

export default SneakerDetails;
