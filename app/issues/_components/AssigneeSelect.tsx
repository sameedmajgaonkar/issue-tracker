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

const AssigneeSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Assignee..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="1">Sameed Majgaonkar</SelectItem>
          <SelectItem value="2">Aviraj Patil</SelectItem>
          <SelectItem value="3">Subhan Bhatkar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AssigneeSelect;
