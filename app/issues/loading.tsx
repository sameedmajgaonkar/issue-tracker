import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import IssueToolbar from "./IssueToolbar";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];
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
              <TableRow key={issue}>
                <TableCell>
                  <Skeleton></Skeleton>
                </TableCell>
                <TableCell>
                  <Skeleton></Skeleton>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton></Skeleton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LoadingIssuesPage;
