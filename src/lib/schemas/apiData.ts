import { z } from "zod";

const newsSchema = z.object({
  author: z.string().nullable(),
  content: z.string().nullable(),
  description: z.string().nullable(),
  publishedAt: z.string(),
  source: z.object({
    id: z.string().nullable(),
    name: z.string(),
  }),
  title: z.string(),
  url: z.string(),
  urlToImage: z.string().nullable(),
});

export const apiDataSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(newsSchema),
});

export type TNews = z.infer<typeof newsSchema>;
