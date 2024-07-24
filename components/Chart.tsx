"use client";

import { Area, AreaChart, YAxis, XAxis } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--tab))",
  },
} satisfies ChartConfig;

function Chart() {
  return (
    <div className="flex flex-col w-[972px] h-[480px] bg-primary p-6">
      <Tabs defaultValue="balance">
        <TabsList className="grid w-[141px] grid-cols-2 h-[30px] text-white p-0 mb-[20px]">
          <TabsTrigger
            value="balance"
            className="text-[12px] leading-[18px] font-semibold rounded-l-md"
          >
            Balance
          </TabsTrigger>
          <TabsTrigger
            value="daily_pl"
            className="text-[12px] leading-[18px] font-semibold rounded-r-md"
          >
            Daily PL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="balance">
          <div className="flex w-[934px] h-[388px]">
            <ChartContainer config={chartConfig} className="flex w-full">
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: -12,
                  right: 12,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--tab))"
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--tab))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <YAxis
                  dataKey="desktop"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  // tickFormatter={(value) => value.slice(0, 3)}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#colorUv)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </TabsContent>
        <TabsContent value="daily_pl"></TabsContent>
      </Tabs>
    </div>
  );
}

export default Chart;
