import React from "react";
import Chart from "react-apexcharts";

export default class RentalChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },

        xaxis: {
          categories: [
            "1 Bed Flat",
            "2 Beds Flat",
            "3 Beds Flat",
            "2 Beds House",
            "3 Beds House",
            "4 Beds House"
          ]
        }
        // title: {
        //   text: "Rental Price p/w",
        //   floating: true,
        //   offsetY: 10,
        //   align: "center",
        //   style: {
        //     color: "#444"
        //   }
        // }
        // fill: {
        //   colors: ["#ff9800", "#E91E63"]
        // }
      },

      series: [
        {
          name: "Weekly Rent",
          data: []
        },
        {
          name: "Average Rent in Local Government Area",
          data: []
        }
      ]
    };
  }

  componentDidMount() {
    const { data } = this.props;
    let rent = [
      data.flat1,
      data.flat2,
      data.flat3,
      data.house2,
      data.house3,
      data.house4
    ];
    let avg = [
      data.flat1_avg,
      data.flat2_avg,
      data.flat3_avg,
      data.house2_avg,
      data.house3_avg,
      data.house4_avg
    ];

    // for (let i = 0; i < data.length - 1; i++) {
    //   console.log(data[i]);
    //   if (i % 2 === 0) rent.push(data[i]);
    //   else avg.push(data[i]);
    // }

    this.setState({
      series: [
        { name: "Weekly Rent", data: rent },
        { name: "Average Rent in Local Government Area", data: avg }
      ]
    });
  }

  render() {
    return (
      <React.Fragment>
        <h6 style={{ textAlign: "center" }}>Rental Price Per Week</h6>
        <div id="chart" style={{ opacity: "1" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="350"
          />
        </div>
      </React.Fragment>
    );
  }
}
