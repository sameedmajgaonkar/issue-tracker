import { prisma } from "@/prisma/client";
import { IssueStatusBadge } from "@/app/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaEdit } from "react-icons/fa";
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      <div>
        <Button asChild>
          <Link href={`/issues/${issue.id}/edit`} className="flex">
            <FaEdit /> Edit Issue
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IssueDetailsPage;
