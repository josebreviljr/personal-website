import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    description: z.string(),
    draft:       z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    section:  z.enum(['education', 'professional', 'leadership', 'skills']),
    title:    z.string(),
    location: z.string().default(''),
    subtitle: z.string().default(''),
    bullets:  z.array(z.string()).default([]),
    order:    z.number().default(0),
  }),
});

export const collections = { blog, experience };
