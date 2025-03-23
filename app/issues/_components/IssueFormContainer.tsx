"use client";
import { Issue } from "@prisma/client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  issue?: Issue | null;
}

const IssueFormContainer = ({ issue }: Props) => {
  return <IssueForm issue={issue} />;
};

export default IssueFormContainer;
