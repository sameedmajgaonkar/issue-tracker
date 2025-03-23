import { prisma } from "@/prisma/client";
import IssueForm from "../../_components/IssueForm";

interface Props {
  params: Promise<{ id: string }>;
}
const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
