import { createContentfulClient } from "../contentful/client";
import { handleAsyncFunction } from "../../utils";

export const handleContentfulEntriesCollection = async (contentTypeObj) => {
  const contentfulClient = createContentfulClient();

  const [success, error] = await handleAsyncFunction(
    contentfulClient.getEntries(contentTypeObj)
  );

  return success || error;
};
