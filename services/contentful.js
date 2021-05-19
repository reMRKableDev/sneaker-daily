import { createClient } from "contentful";

import { space, accessToken, content_type } from "../configs";
import { handleAsyncFunction } from "../utils";

export const getEntriesCollection = async () => {
  const contentfulClient = createClient({ space, accessToken });

  const [success, error] = await handleAsyncFunction(
    contentfulClient.getEntries({ content_type })
  );

  return success || error;
};
