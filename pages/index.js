import SneakerList from "../components/SneakerList/SneakerList";

import { getAllEntriesCollection } from "../services";

const Home = ({ sneakers }) => {
  return (
    <div className="sneaker-list">
      <SneakerList sneakersList={sneakers} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const entriesCollection = await getAllEntriesCollection();

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
