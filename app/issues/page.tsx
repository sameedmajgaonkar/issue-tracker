import { IssueStatusBadge, Link } from "@/app/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import {
  IoCaretDownCircleOutline,
  IoCaretUpCircleOutline,
} from "react-icons/io5";
import IssueToolbar from "./IssueToolbar";

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
    order: "asc" | "desc";
  }>;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const columns: { label: string; value: keyof Issue; classname?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status" },
    { label: "Created", value: "createdAt", classname: "hidden md:table-cell" },
  ];
  const params = await searchParams;

  const statuses = Object.values(Status);
  const status = statuses.includes(params.status) ? params.status : undefined;

  const order = params.order === "asc" ? "desc" : "asc";

  const orderBy = columns.map((col) => col.value).includes(params.orderBy)
    ? { [params.orderBy]: order }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
  });

  return (
    <>
      <IssueToolbar />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.value} className={column.classname}>
                <NextLink
                  href={{
                    query: {
                      ...params,
                      orderBy: column.value,
                      order,
                    },
                  }}
                  className="flex justify-center gap-1"
                >
                  {column.label}
                  {params.order === "asc" &&
                    column.value === params.orderBy && (
                      <IoCaretUpCircleOutline className="text-xl" />
                    )}
                  {params.order === "desc" &&
                    column.value === params.orderBy && (
                      <IoCaretDownCircleOutline className="text-xl" />
                    )}
                </NextLink>
              </TableHead>
            ))}
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
    </>
  );
};

export const dynamic = "force-dynamic";
export default IssuesPage;
