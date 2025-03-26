import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import { IssueStatusBadge } from "../components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <div className="space-y-5">
      <Heading>Latest Issues</Heading>
      <Table className="text-left">
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="p-3 flex justify-between">
                <Link
                  href={`/issues/${issue.id}`}
                  className="flex flex-col gap-3"
                >
                  {issue.title}
                  <IssueStatusBadge status={issue.status} />
                </Link>
                {issue.assignedToUser && (
                  <Avatar>
                    <AvatarImage
                      src={issue.assignedToUser.image!}
                      alt="avatar"
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback delayMs={3000}>?</AvatarFallback>
                  </Avatar>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestIssues;
