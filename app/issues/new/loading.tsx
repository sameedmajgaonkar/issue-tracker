import { Skeleton } from "@/components/ui/skeleton";

const LoadingNewIssuePage = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Skeleton className="h-80" />
    </div>
  );
};

export default LoadingNewIssuePage;
