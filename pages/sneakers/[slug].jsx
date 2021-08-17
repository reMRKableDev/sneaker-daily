import SneakerDetails from "../../components/SneakerDetails";

import { getSneakerEntriesCollection } from "../../services";

const DetailsPage = ({ sneakerDetails }) => {
  return <SneakerDetails {...sneakerDetails} />;
};

export default DetailsPage;

export const getStaticPaths = async () => {
  const sneakerCollection = await getSneakerEntriesCollection();

  if (sneakerCollection instanceof Error) {
    console.error(
      `Problems occurred while fetching sneaker collection from contentful: ${resError}`
    );
    return;
  }

  const paths = sneakerCollection?.items.map((sneakerItem) => {
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

  const [sneakerDetails] = sneakerCollection?.items;

  return {
    props: { sneakerDetails },
  };
};
