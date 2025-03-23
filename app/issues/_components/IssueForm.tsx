"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Issue } from "@prisma/client";
import { z } from "zod";
import axios from "axios";
import { issueSchema } from "@/app/validationSchemas";
import { ErrorMessage } from "@/app/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { FaGithubAlt } from "react-icons/fa6";
import { toast } from "sonner";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface Props {
  issue?: Issue | null;
}

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: Props) => {
  const router = useRouter();

  const {
    register,
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      title: issue?.title || "",
      description: issue?.description || "",
    },
  });

  const doSubmit = async (newIssue: IssueFormData) => {
    try {
      if (issue) await axios.patch(`/api/issues/${issue.id}`, newIssue);
      else await axios.post("/api/issues", newIssue);
      router.push("/issues");
      router.refresh();
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
    <form className="space-y-3" onSubmit={handleSubmit(doSubmit)}>
      <ErrorMessage name="title" errors={errors} />
      <Input type="text" placeholder="Title" {...register("title")} />

      <ErrorMessage name="description" errors={errors} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE {...field} placeholder="Description" />
        )}
      />

      <Button disabled={isSubmitting}>
        <FaGithubAlt />
        {issue ? "Update" : "Submit New"} Issue{" "}
        <Spinner show={isSubmitting} size="small" className="text-secondary" />
      </Button>
    </form>
  );
};

export default IssueForm;
