import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Heading } from "@/components/ui/heading";

const LoadingIssueDetailsPage = () => {
  return (
    <div className="space-y-5 max-w-xl">
      <Heading>
        <Skeleton className="h-12" />
      </Heading>
      <div className="grid grid-cols-3 gap-2">
        <Skeleton />
        <Skeleton className="col-span-2" />
      </div>
      <Card>
        <CardContent>
          <Skeleton className="h-72" />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsPage;
