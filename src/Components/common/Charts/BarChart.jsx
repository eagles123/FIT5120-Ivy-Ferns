// import React from "react";
// import Chart from "react-apexcharts";

// export default class BarChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             endingShape: "rounded",
//             columnWidth: "55%"
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           show: true,
//           width: 2,
//           colors: ["transparent"]
//         },
//         xaxis: {
//           categories: [
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct"
//           ]
//         },
//         yaxis: {
//           title: {
//             text: "$ (thousands)"
//           }
//         },
//         fill: {
//           opacity: 1
//         },
//         tooltip: {
//           y: {
//             formatter: function(val) {
//               return "$ " + val + " thousands";
//             }
//           }
//         }
//       },
//       series: [
//         {
//           name: "Net Profit",
//           data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
//         },
//         {
//           name: "Revenue",
//           data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//         },
//         {
//           name: "Free Cash Flow",
//           data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type="bar"
//           width="500"
//         />
//       </div>
//     );
//   }
// }
