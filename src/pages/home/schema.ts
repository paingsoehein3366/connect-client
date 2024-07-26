import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ message: 'Name is required!' }).min(1),
  email: z.string({ message: 'Email is required!' }).min(1),
  message: z.string({ message: 'Message is required!' }).min(1)
})

export type ContactSchemaType = z.infer<typeof contactSchema>