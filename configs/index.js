const { CONTENT_TYPE, CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } =
  process.env;

export const space = CONTENTFUL_SPACE_ID;
export const accessToken = CONTENTFUL_ACCESS_TOKEN;
export const content_type = CONTENT_TYPE;
