"use client";

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const IssueStatusFilter = () => {
  const searchParams = useSearchParams();
  const selectedStatus = Object.values(Status).includes(
    searchParams.get("status") as Status // no tyoe casting
  )
    ? searchParams.get("status")
    : "All";

  const router = useRouter();
  const statuses: { label: String; value?: Status }[] = [
    {
      label: "All",
    },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSE" },
  ];
  return (
    <Select
      defaultValue={selectedStatus!}
      onValueChange={(status) => {
        const query = status && status !== "All" ? `?status=${status}` : "";
        router.push(`/issues/${query}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Filter: by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statuses.map((status, index) => (
            <SelectItem value={status.value || "All"} key={index}>
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default IssueStatusFilter;
