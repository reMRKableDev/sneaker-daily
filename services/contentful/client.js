import { createClient } from "contentful";

import { space, accessToken } from "../../configs";

export const createContentfulClient = () =>
  createClient({ space, accessToken });
