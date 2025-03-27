import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueTable, { columnValues, IssueQuery } from "./IssueTable";
import IssueToolbar from "./IssueToolbar";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<IssueQuery>;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const statuses = Object.values(Status);
  const status = statuses.includes(params.status) ? params.status : undefined;

  params.order = params.order === "asc" ? "desc" : "asc";

  const orderBy = columnValues.includes(params.orderBy)
    ? { [params.orderBy]: params.order }
    : undefined;

  const page = parseInt(params.page || "1");
  const PAGE_SIZE = 10;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  const issueCount = await prisma.issue.count({ where: { status } });

  return (
    <>
      <IssueToolbar />
      <IssueTable searchParams={params} issues={issues} />
      <Pagination
        itemCount={issueCount}
        pageSize={PAGE_SIZE}
        currentPage={page}
      />
    </>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Issue list",
  description: "View all project issues",
};
