import React from "react";
import ReactECharts from "echarts-for-react";

type props = {
  title: string;
  data: number[];
};

export default function LineChart({ title, data }: props) {
  const options = {
    title: {
      text: title,
    },
    xAxis: {
      type: "category",
      show: false,
    },
    yAxis: {
      type: "value",
      max: 1,
      axisLabel: {
        formatter: (value) => {
          return value.toFixed(2) * 100 + "%";
        },
      },
    },
    series: [
      {
        name: "Usage",
        type: "line",
        data: data,
        smooth: true,
        showSymbol: false,
        emphasis: {
          focus: "none",
        },
        markPoint: {
          symbol: "circle", // Set a symbol to ensure the label remains visible
          symbolSize: 0, // Make the icon effectively invisible
          data: [
            {
              type: "none",
              coord: [data.length - 1, data[data.length - 1]], // Position at the last data point
              label: {
                show: true,
                formatter: (value) => {
                  return (value.data.coord[1] * 100).toFixed(1) + "%";
                }, // Display the value as percentage
                position: "top",
                color: "#000", // Text color
              },
            },
          ],
        },
      },
    ],
    tooltip: {
      show: false,
    },
  };

  return (
    <ReactECharts
      opts={{ renderer: "svg" }} // Canvas rendering
      option={options}
    />
  );
}
