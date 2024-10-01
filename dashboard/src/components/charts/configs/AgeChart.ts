

import { ApexOptions } from "apexcharts";

interface AgeChart {
  series: Array<{
    name: string;
    data: number[];
    color?: string;
  }>;
  options: ApexOptions;
}

const AgeChart: AgeChart = {
  series: [
    {
      name: "Sales",
      data: [750, 400, 500, 220],
      color: "#F7F3FF",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 10,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: ["30", "35 - 37", "38 - 40", "41 - 42"],
      labels: {
        show: true,
        offsetX: 0, // Adjust label position horizontally if needed
        offsetY: 0, // Adjust label position vertically if needed
        rotate: 0,  // Control label rotation if needed
        style: {
          colors: Array(4).fill("#4A5157"), // Apply color to each label
        },
      },
      axisBorder: {
        show: true,
        color: "#f2f2f3",
      },
    },
    yaxis: {
      min: 100,
      max: 1000,
      tickAmount: 5,
      labels: {
        show: true,
        offsetX: 0, // Adjust the position of y-axis labels if needed
        formatter: (value: number) => `${value}k`,
        style: {
          colors: Array(5).fill("#4A5157"), // Apply color to each y-axis label
        },
      },
      axisBorder: {
        show: true,
        color: "#f2f2f3",
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$ ${val} thousands`,
      },
    },
    
  },
};

export default AgeChart;
