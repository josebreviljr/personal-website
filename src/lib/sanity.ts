import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'r5rf35nk',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
