"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithubAlt } from "react-icons/fa6";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="space-y-3 min-w-full md:w-1/2 overflow-hidden">
      <Input type="text" placeholder="Title" />
      <SimpleMDE />
      <Button className="rounded-sm">
        <FaGithubAlt />
        Submit New Issue
      </Button>
    </div>
  );
};

export default NewIssuePage;
