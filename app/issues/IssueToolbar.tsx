import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssueToolbar = () => {
  return (
    <div className="mb-10">
      <Button asChild variant="outline">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueToolbar;
