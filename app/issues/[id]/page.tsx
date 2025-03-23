import { IssueStatusBadge } from "@/app/components";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <div className="space-y-5">
      <Heading>{issue.title}</Heading>
      <div className="flex gap-5">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose prose-h1:text-primary prose-em:text-primary prose-blockquote:text-primary">
        <CardContent>
          <Markdown>{issue.description}</Markdown>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
