"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ms from "ms";
import { toast } from "sonner";

interface Props {
  issue: Issue;
}
const AssigneeSelect = ({ issue }: Props) => {
  const { data: users, isLoading, error } = useUsers();

  const assignIssue = (userId: string) =>
    axios
      .patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId !== "unassigned" ? userId : null,
      })
      .catch(() => toast.error("Changes could not be saved"));

  if (isLoading) return <Skeleton className="h-9 w-24" />;

  if (error) return null;

  return (
    <Select
      defaultValue={issue.assignedToUserId || "unassigned"}
      onValueChange={assignIssue}
    >
      <SelectTrigger>
        <SelectValue placeholder="Assignee..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="unassigned">Unassigned</SelectItem>
          {users?.map((user) => (
            <SelectItem value={user.id} key={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const useUsers = () => {
  function fetchUsers() {
    return axios.get<User[]>("/api/users/").then((res) => res.data);
  }
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: ms("24h"),
  });
};

export default AssigneeSelect;
