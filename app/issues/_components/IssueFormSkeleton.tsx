import { Skeleton } from "@/components/ui/skeleton";

const IssueFormSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Skeleton className="h-96" />
    </div>
  );
};

export default IssueFormSkeleton;
