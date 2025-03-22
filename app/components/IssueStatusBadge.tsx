import { Badge } from "@/components/ui/badge";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; className: string }> = {
  OPEN: { label: "Open", className: "bg-red-300 text-red-800" },
  IN_PROGRESS: {
    label: "In Progress",
    className: "bg-violet-300 text-violet-800",
  },
  CLOSE: { label: "Closed", className: "bg-green-300 text-green-800" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={`${statusMap[status].className} rounded-sm font-semibold`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;
