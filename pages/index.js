import SneakerList from "../components/SneakerList";

import { getAllEntriesCollection } from "../services";

const Home = ({ sneakersList }) => {
  return <SneakerList sneakersList={sneakersList} />;
};

export default Home;

export const getStaticProps = async () => {
  const entriesCollection = await getAllEntriesCollection();

  if (entriesCollection instanceof Error) {
    console.error(
      `Problems occurred while fetching entries from contentful: ${resError}`
    );
    return;
  }

  return {
    props: {
      sneakersList: entriesCollection?.items,
    },
  };
};
