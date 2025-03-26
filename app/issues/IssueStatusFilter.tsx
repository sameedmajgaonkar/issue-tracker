"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const IssueStatusFilter = () => {
  const searchParams = useSearchParams();
  const selectedStatus = Object.values(Status).includes(
    searchParams.get("status") as Status // no type casting
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
    { label: "Closed", value: "CLOSED" },
  ];

  const handleChange = (status: string) => {
    const params = new URLSearchParams();

    if (status) params.append("status", status);

    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    if (searchParams.get("order"))
      params.append("order", searchParams.get("order")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/issues/${query}`);
  };

  return (
    <Select defaultValue={selectedStatus!} onValueChange={handleChange}>
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
