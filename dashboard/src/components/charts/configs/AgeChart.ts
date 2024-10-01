
import { ApexOptions } from 'apexcharts';

const AgeChart: { series: Array<{ name: string; data: number[]; color: string }>; options: ApexOptions } = {
    series: [
        {
            name: "Sales",
            data: [450, 200, 220, 500],
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
                borderRadius: 10, // Border radius applied
                // borderRadiusApplication: "end", // Applies the radius only at the top
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
          title: {
                    text: 'SART Age',
                    style: {
                      fontSize:  '12px',
                      fontWeight:  '400',
                      fontFamily:  'Poppins',
                      color:  '#4A5157'
                    },
                  },
            categories: ["30", "35 - 37", "38 - 40", "41 - 42"],
            labels: {
                show: true,
                style: {
                    colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
                },
            },
            axisBorder: {
                show: true,
                color: '#f2f2f3',
            },
        },
        yaxis: {
                title: {
                  text: 'Patients',
                  style: {
                    fontSize:  '12px',
                    fontWeight:  '400',
                    fontFamily:  'Poppins',
                    color:  '#4A5157'
                  },
                },
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
                formatter: function (val: number) {
                    return "$ " + val + " thousands";
                },
            },
        },
        states: {
            hover: {
              filter: {
                type: "none", // Disable any hover filter effect
              },
            },
          },
    },
};

export default AgeChart;
