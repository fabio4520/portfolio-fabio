import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
  projectId: "15x8cqf4",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
}

export const client = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
