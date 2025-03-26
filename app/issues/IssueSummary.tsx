import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
    },
    {
      label: "InProgress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {containers.map((container) => (
        <Card className="min-w-fit" key={container.status}>
          <CardHeader>
            <CardTitle>
              <Link href={`/issues?status=${container.status}`}>
                {container.label}
              </Link>
            </CardTitle>
            <CardDescription className="text-md md:text-xl mt-3">
              {container.value}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;
