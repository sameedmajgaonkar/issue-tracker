import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import AssigneeSelect from "../_components/AssigneeSelect";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <>
      <div className="space-y-5">
        <IssueDetails issue={issue} />
      </div>
      {session && (
        <div className="flex gap-5 mt-5 flex-wrap justify-center">
          <AssigneeSelect />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </div>
      )}
    </>
  );
};

export default IssueDetailsPage;
