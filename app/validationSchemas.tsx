import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Please provide a title" })
    .max(255, { message: "Title cannot exceed 255 characters." }),
  description: z
    .string()
    .min(1, { message: "Please provide a description" })
    .max(65535, { message: "Description cannot exceed 65535 characters." }),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Please provide a title" })
    .max(255, { message: "Title cannot exceed 255 characters." })
    .optional(),
  description: z
    .string()
    .min(1, { message: "Please provide a description" })
    .max(65535, { message: "Description cannot exceed 65535 characters." })
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, { message: "User id is required" })
    .max(255)
    .optional()
    .nullable(),
});
