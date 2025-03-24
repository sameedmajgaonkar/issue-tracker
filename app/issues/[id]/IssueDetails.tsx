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
    <div className="space-y-5">
      <Heading>{issue.title}</Heading>
      <div className="flex gap-5">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose max-w-full">
        <CardContent>
          <Markdown>{issue.description}</Markdown>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetails;
