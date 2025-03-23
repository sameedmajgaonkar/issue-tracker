import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";

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
      <div className="space-y-5 max-w-xl">
        <IssueDetails issue={issue} />
      </div>
      <div className="">
        <EditIssueButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailsPage;
