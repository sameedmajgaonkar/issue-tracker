import { prisma } from "@/prisma/client";
import IssueFormContainer from "../../_components/IssueFormContainer";

interface Props {
  params: Promise<{ id: string }>;
}
const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  return <IssueFormContainer issue={issue} />;
};

export default EditIssuePage;
