import { content_type } from "../configs";
import { handleContentfulEntriesCollection } from "./helpers";

export const getAllEntriesCollection = async () =>
  await handleContentfulEntriesCollection({ content_type });

export const getSneakerEntriesCollection = async (...slug) => {
  return slug && slug.length
    ? await handleContentfulEntriesCollection({
        content_type: "sneaker",
        "fields.slug": slug[0],
      })
    : await handleContentfulEntriesCollection({ content_type: "sneaker" });
};

export const getGlobalEntriesCollection = async () =>
  await handleContentfulEntriesCollection({ content_type: "global" });
