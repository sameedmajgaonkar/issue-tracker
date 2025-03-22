"use client";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithubAlt } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";
import "easymde/dist/easymde.min.css";
import { toast } from "sonner";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<IssueForm>();

  const doSubmit = async (issue: IssueForm) => {
    try {
      await axios.post("/api/issues", issue);
      router.push("/issues");
    } catch (error) {
      toast.error("An unexpected error has occured!", {
        duration: 1500,
        style: {
          backgroundColor: "var(--destructive)",
          color: "var(--secondary)",
        },
      });
    }
  };

  return (
    <form
      className="space-y-3 md:px-32 lg:px-48"
      onSubmit={handleSubmit(doSubmit)}
    >
      <Input type="text" placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} />}
      />
      <Button className="rounded-sm">
        <FaGithubAlt />
        Submit New Issue
      </Button>
    </form>
  );
};

export default NewIssuePage;
