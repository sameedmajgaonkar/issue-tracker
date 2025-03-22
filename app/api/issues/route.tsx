import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";

type Issue = z.infer<typeof createIssueSchema>;

export async function POST(req: NextRequest) {
  const body: Issue = await req.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      validation.error.errors.map((err) => ({
        path: err.path[0],
        message: err.message,
      })),
      { status: 400 }
    );

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
