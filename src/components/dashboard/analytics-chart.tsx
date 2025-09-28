"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, CartesianGrid } from 'recharts';

interface AnalyticsChartProps {
  data: Array<{ name: string; value: number }>;
  config: ChartConfig;
  title: string;
}

export function AnalyticsChart({ data, config, title }: AnalyticsChartProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <ChartContainer config={config} className="h-[250px] w-full">
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
<Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}