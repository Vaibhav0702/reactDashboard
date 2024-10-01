import { ApexOptions } from "apexcharts";

interface GradingChart {
    series: Array<{
        name: string;
        data: number[];
        color?: string;
    }>;
    options: ApexOptions;
}

const GradingChart: GradingChart = {
    series: [
        {
            name: "Product A",
            data: [150, 200, 100, 220, 300, 100],
            color: "#F1EBFF",
        },
        {
            name: "Product B",
            data: [200, 150, 150, 180, 250, 200],
            color: "#E4D7FF",
        },
        {
            name: "Product C",
            data: [100, 120, 80, 130, 150, 120],
            color: "#C7B2F2",
        },
        {
            name: "Product D",
            data: [50, 80, 60, 90, 120, 80],
            color: "#9E7FE1",
        },
        {
            name: "Product E",
            data: [50, 80, 60, 90, 120, 80],
            color: "#7C67A8",
        },
    ],

    options: {
        chart: {
            type: "bar",
            width: "100%",
            height: "auto",
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: "30%",
                borderRadius: 10,
                // borderRadiusApplication: "end",
                barHeight: "70%",
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["#fff"],
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
            borderColor: "#ccc",
            strokeDashArray: 2,

        },
        xaxis: {
            categories: ["Day 8", "Day 7", "Day 6", "Day 5", "Day 4", "Day 3"],
            labels: {
                show: false, // No need to display x-axis labels
            },
            axisBorder: {
                show: true,
                color: "#f2f2f3",
            },
        },
        yaxis: {
            title: {

                text: 'Days',

                style: {
                    fontSize: '12px',
                    fontWeight: '400',
                    fontFamily: 'Poppins',
                    color: '#4A5157',
                }

            },
            labels: {
                show: true,
                offsetX: 0, // Remove invalid properties
                offsetY: 0,
                style: {
                    colors: Array(6).fill("#4A5157"), // Set label colors dynamically
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
                    return `$ ${val} thousands`;
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
        legend: {
            show: false, // Hide the legend
        },
    },
};

export default GradingChart;
