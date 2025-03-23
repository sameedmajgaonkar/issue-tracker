import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";

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
      <div className="space-y-5 max-w-xl">
        <IssueDetails issue={issue} />
      </div>
      <div className="flex gap-5">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailsPage;
