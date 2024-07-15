import { z } from "zod";

export const postSchema = z.object({
  title: z.string(),
  room_type: z.string(),
  build_type: z.string(),
  city: z.string(),
  price: z.coerce.number(),
  station: z.string(),
  address: z.string(),
  image_url: z.string().array().optional()
});

export type PostSchemaTDO = z.infer<typeof postSchema>

export const updatePostSchema = z.object({
  title: z.string(),
  room_type: z.string(),
  build_type: z.string(),
  city: z.string(),
  price: z.coerce.number(),
  station: z.string(),
  address: z.string(),
  image_url: z.string().array().optional()
}).partial();

export type UpdatePostSchemaTDO = z.infer<typeof updatePostSchema>