import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

interface RadialBarChartProps {
  values: number[]; // Array of numbers (percentages)
}

const CircleRingColors = ["#7ed9bfcc", "#7FD9BF", "#56CCAA", "#1ead8a"]; // Define colors

const CustomRadialBarChart: React.FC<RadialBarChartProps> = (props) => {
  const { values = [0, 0, 0, 0] } = props;
  const data = values.map((value, index) => ({
    name: `Item ${index + 1}`,
    value: value || 0, // Set default value to 0
    fill: CircleRingColors[index], // Assign colors dynamically
  }));

  return (
    <RadialBarChart
      width={300}
      height={300}
      cx="50%"
      cy="50%"
      innerRadius="30%"
      outerRadius="100%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />

      <RadialBar
        dataKey="value"
        background={{ fill: "#EEE" }} // Background color for the radial bars
        cornerRadius={20}
      />
    </RadialBarChart>
  );
};

export default CustomRadialBarChart;
