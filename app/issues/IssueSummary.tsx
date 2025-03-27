import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoAlertFill } from "react-icons/go";
import { BsHourglassSplit } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Status } from "@prisma/client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
    icon: ReactNode;
  }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
      icon: <GoAlertFill />,
    },
    {
      label: "InProgress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      icon: <BsHourglassSplit />,
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
      icon: <MdVerifiedUser />,
    },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {containers.map((container) => (
        <Card className="min-w-fit" key={container.status}>
          <CardHeader>
            <CardTitle className="flex justify-between md:text-xl">
              <Link href={`/issues?status=${container.status}`}>
                {container.label}
              </Link>
              {container.icon}
            </CardTitle>
            <CardDescription className="text-md md:text-xl mt-3">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {container.value}
              </h3>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;
