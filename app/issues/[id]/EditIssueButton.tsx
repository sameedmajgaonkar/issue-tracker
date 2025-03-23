import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

interface Props {
  issueId: number;
}

const EditIssueButton = ({ issueId }: Props) => {
  return (
    <Button asChild>
      <Link href={`/issues/${issueId}/edit`} className="flex">
        <FaEdit /> Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;
