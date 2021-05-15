import { createClient } from "contentful";
import { space, accessToken, content_type } from "../configs";
import { handleAsyncFunction } from "../utils";

import SneakerList from "../components/SneakerList/SneakerList";

const Home = ({ sneakers }) => {
  return (
    <div className="sneaker-list">
      <SneakerList sneakersList={sneakers} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const client = createClient({
    space,
    accessToken,
  });

  const [resSuccess, resError] = await handleAsyncFunction(
    client.getEntries({ content_type })
  );

  if (resError) {
    console.error(
      `Problems occurred while fetching entries from contentful: ${resError}`
    );
    return;
  }

  return {
    props: {
      sneakers: resSuccess.items,
    },
  };
}
