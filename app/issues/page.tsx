import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <>
      <div className="mb-10">
        <Button asChild variant="outline">
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
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
                <TableCell>{issue.title}</TableCell>
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
