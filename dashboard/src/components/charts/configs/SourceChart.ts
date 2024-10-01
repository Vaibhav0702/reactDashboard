import { ApexOptions } from 'apexcharts'; // Import the ApexOptions type

interface SourceChart {
  series: number[];
  options: ApexOptions;
}

const SourceChart : SourceChart = {
  series: [65, 20, 30, 35], // Percentage values for radial bars
  options: {
    chart: {
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%', // Adjust the inner radius (hollow center)
          background : '#F0F0F0'
        },
        track: {
          background: '#fafafa', // Track background color
          strokeWidth: '100%', // Width of the track (the path behind the bar)
        },
      },
    },
    labels: ['Mobile apps', 'Websites', 'Fresh Donor', 'Frozen Donor'], // Labels for radial bars
    fill: {
      colors: ['#37C577', '#3768C5', '#EC9D3E', '#C5B037'], // Customize the colors
    },
    stroke: {
      lineCap: 'round'
    },
    legend: {
      show: false,
      position: 'top', // Position the legend at the top
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    
  },
};

export default SourceChart;
