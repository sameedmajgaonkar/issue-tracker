import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
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
      <Card>
        <CardContent>
          <Text>{issue.description}</Text>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
