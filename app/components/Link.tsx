import NextLink from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <Button
      variant="link"
      asChild
      className="text-violet-600 dark:text-violet-400"
    >
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
};

export default Link;
