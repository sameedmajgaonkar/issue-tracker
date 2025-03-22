import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent w-96 h-6 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
