import { Button } from "@/components/ui/button";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueToolbar = () => {
  return (
    <div className="flex justify-between mb-10">
      <IssueStatusFilter />
      <Button asChild variant="outline">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueToolbar;
