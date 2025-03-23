import { z } from "zod";

export const issueSchema = z.object({
  description: z.string().min(1, { message: "Please provide a description" }),
  title: z
    .string()
    .min(1, { message: "Please provide a title" })
    .max(255, { message: "Title cannot exceed 255 characters." }),
});
