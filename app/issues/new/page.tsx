"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";
import dynamic from "next/dynamic";
import axios from "axios";
import { createIssueSchema } from "@/app/validationSchemas";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithubAlt } from "react-icons/fa6";
import { toast } from "sonner";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });

  console.log(errors);
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
      <ErrorMessage
        name="title"
        errors={errors}
        render={({ message }) => <p className="text-destructive">{message}</p>}
      />
      <Input type="text" placeholder="Title" {...register("title")} />
      <ErrorMessage
        name="description"
        errors={errors}
        render={({ message }) => <p className="text-destructive">{message}</p>}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE {...field} placeholder="Description" />
        )}
      />
      <Button className="rounded-sm">
        <FaGithubAlt />
        Submit New Issue
      </Button>
    </form>
  );
};

export default NewIssuePage;
