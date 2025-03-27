"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const chartConfig = {
  value: {
    label: "Total Issues",
  },
} satisfies ChartConfig;

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-full overflow-hidden w-full "
    >
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="label"
          tickLine={false}
          tickMargin={15}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="value" fill="var(--primary)" radius={5} barSize={50} />
      </BarChart>
    </ChartContainer>
  );
};

export default IssueChart;
