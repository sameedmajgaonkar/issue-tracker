import { IssueStatusBadge } from "@/app/components";
import { Card, CardContent } from "@/components/ui/card";
import { Issue } from "@prisma/client";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Markdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <div className="flex gap-5">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose prose-h1:text-primary prose-em:text-primary prose-blockquote:text-primary">
        <CardContent>
          <Markdown>{issue.description}</Markdown>
        </CardContent>
      </Card>
    </>
  );
};

export default IssueDetails;
