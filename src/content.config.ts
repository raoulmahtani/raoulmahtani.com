import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().transform((value) => value),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
