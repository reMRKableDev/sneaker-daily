import { getSneakerEntriesCollection } from "../../services";

const SneakerDetails = () => {
  return <div>Sneaker Details</div>;
};

export default SneakerDetails;

export const getStaticPaths = async () => {
  const sneakerCollection = await getSneakerEntriesCollection();

  if (sneakerCollection instanceof Error) {
    console.error(
      `Problems occurred while fetching sneaker collection from contentful: ${resError}`
    );
    return;
  }

  const paths = sneakerCollection?.items?.map((sneakerItem) => {
    const { slug } = sneakerItem?.fields;

    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const sneakerCollection = await getSneakerEntriesCollection(params?.slug);

  if (sneakerCollection instanceof Error) {
    console.error(
      `Problems occurred while fetching sneaker collection from contentful: ${resError}`
    );
    return;
  }

  const [currentSneaker] = sneakerCollection?.items;

  return {
    props: { currentSneaker },
  };
};
