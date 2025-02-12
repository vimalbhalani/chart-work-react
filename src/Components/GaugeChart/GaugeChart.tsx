import React from "react";
import GaugeComponent from "./GaugeComponent";

const GaugeChartColors = ["#E53E3E", "#F6AD55", "#FAF089", "#68D391"];

const GaugeChartArcLimits = [
  { limit: 50 },
  { limit: 65 },
  { limit: 80 },
  { limit: 100 },
];

interface GaugeChartProps {
  value?: number;
  text?: string;
  unit?: string;
  style?: React.CSSProperties,
}

const GaugeChart: React.FC<GaugeChartProps> = (props) => {
  const { value = 0, text = "", unit = "", style } = props;
  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        colorArray: GaugeChartColors,
        padding: 0.05,
        subArcs: GaugeChartArcLimits,
      }}
      labels={{
        tickLabels: { hideMinMax: true },
        valueLabel: {
          text: text,
          style: {
            fontSize: "60px",
            fill: "black",
            textShadow:
              "black 1px 0.5px 0px, black 0px 0px 0.03em, black 0px 0px 0.01em",
          },
        },
        unitLabel: {
          text: unit,
          style: {
            fontSize: "20px",
            fill: "grey",
          },
        },
      }}
      style={style}
      pointer={{ type: "blob", animationDelay: 0 }}
      value={value}
    />
  );
};

export default GaugeChart;
