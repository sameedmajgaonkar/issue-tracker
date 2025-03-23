import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <Button className="bg-destructive">
      <MdDelete /> Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
