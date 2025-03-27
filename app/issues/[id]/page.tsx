import authOptions from "@/app/auth/authOptions";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssigneeSelect from "../_components/AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
          <AssigneeSelect issue={issue} />
        </div>
      )}
    </>
  );
};

export default IssueDetailsPage;

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  return {
    title: issue?.title,
    description: "Details of issues",
  };
}
