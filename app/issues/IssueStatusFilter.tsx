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

const IssueStatusFilter = () => {
  const statuses: { label: String; value?: Status }[] = [
    {
      label: "All",
    },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSE" },
  ];
  return (
    <Select>
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
