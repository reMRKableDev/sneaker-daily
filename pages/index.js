import SneakerList from "../components/SneakerList/SneakerList";

import { getEntriesCollection } from "../services/contentful";

const Home = ({ sneakers }) => {
  return (
    <div className="sneaker-list">
      <SneakerList sneakersList={sneakers} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const entriesCollection = await getEntriesCollection();

  if (entriesCollection instanceof Error) {
    console.error(
      `Problems occurred while fetching entries from contentful: ${resError}`
    );
    return;
  }

  return {
    props: {
      sneakers: entriesCollection?.items,
    },
  };
}
