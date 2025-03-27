"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data} barGap={1} barCategoryGap={2}>
        <XAxis
          dataKey="label"
          tickLine={false}
          tickMargin={15}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="value" fill="var(--primary)" radius={10} barSize={100} />
      </BarChart>
    </ChartContainer>
  );
};

export default IssueChart;
