import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog };
