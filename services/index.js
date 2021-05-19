import { content_type } from "../configs";
import { handleContentfulEntriesCollection } from "./helpers";

export const getAllEntriesCollection = async () =>
  await handleContentfulEntriesCollection({ content_type });

export const getSneakerEntriesCollection = async () =>
  await handleContentfulEntriesCollection({ content_type: "sneaker" });
