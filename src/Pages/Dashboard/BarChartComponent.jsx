import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export function BarChartComponent() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["JAN", "FEB", "MAR"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [30, 80, 50],
        },
      ]}
      width={200}
      height={230}
    />
  );
}
