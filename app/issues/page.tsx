import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import IssueToolbar from "./IssueToolbar";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(1000);
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
