import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { z } from "zod";

interface RouteParams {
  params: Promise<{ id: string }>;
}

type IssueBody = z.infer<typeof issueSchema>;

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body: IssueBody = await req.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue)
    return NextResponse.json(
      { error: "Invalid issue" },
      {
        status: 404,
      }
    );

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
