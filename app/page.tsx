import { prisma } from "@/prisma/client";
import IssueSummary from "./issues/IssueSummary";
import LatestIssues from "./issues/LatestIssues";
import IssueChart from "./issues/IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const inPorgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  return (
    <div className="space-y-5">
      <LatestIssues />
      <IssueSummary open={open} inProgress={inPorgress} closed={closed} />
      <IssueChart open={open} inProgress={inPorgress} closed={closed} />
    </div>
  );
}
