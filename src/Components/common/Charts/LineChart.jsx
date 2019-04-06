// import React from "react";
// import Chart from "react-apexcharts";

// export default class LineChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           zoom: {
//             enabled: true
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: "straight"
//         },
//         title: {
//           text: "Population Trend",
//           align: "left"
//         },
//         grid: {
//           row: {
//             colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//             opacity: 0.5
//           }
//         },
//         xaxis: {
//           categories: [
//             "2010",
//             "2012",
//             "2013",
//             "2014",
//             "2016",
//             "2017",
//             "2018",
//             "2019",
//             "2020"
//           ]
//         }
//       },
//       series: [
//         {
//           name: "Greater Geelong",
//           data: [30, 41, 35, 51, 49, 62, 69, 91, 148]
//         },
//         {
//           name: "Ballarat",
//           data: [9, 21, 35, 44, 49, 70, 120, 125, 138]
//         },
//         {
//           name: "Greater Bendigo",
//           data: [20, 31, 75, 91, 99, 120, 125, 126, 130]
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
//           type="line"
//           width="500"
//         />
//       </div>
//     );
//   }
// }
