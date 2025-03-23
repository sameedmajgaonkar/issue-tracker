import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import { IssueStatusBadge } from "@/app/components";
import { Link } from "@/app/components";
import IssueToolbar from "./IssueToolbar";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <>
      <IssueToolbar />
      <div className="md:px-56">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Issue</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center hidden md:table-cell">
                Created
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                </TableCell>
                <TableCell>
                  <IssueStatusBadge status={issue.status} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default IssuesPage;
