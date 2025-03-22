import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const IssuesPage = () => {
  return (
    <div>
      <Button asChild variant="outline">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
