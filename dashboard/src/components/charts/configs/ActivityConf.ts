import { ApexOptions } from 'apexcharts';

const eChart2: { series: Array<{ name: string; data: number[]; color: string }>; options: ApexOptions } = {
    series: [
        {
            name: "Sales",
            data: [450, 200, 100, 220, 500, 100],
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
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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

export default eChart2;
