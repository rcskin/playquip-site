import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const isDev = process.env.NODE_ENV === "development";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isDev, // Use CDN in production
  perspective: isDev ? "previewDrafts" : "published", // Drafts in dev
});

export const listenClient = createClient({
  ...client.config(),
  useCdn: false, // Always fetch fresh data when listening
});

