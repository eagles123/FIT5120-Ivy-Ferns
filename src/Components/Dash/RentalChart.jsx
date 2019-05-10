import React from "react";
import Chart from "react-apexcharts";
import ReactTooltip from "react-tooltip";

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
        chart: {
          toolbar: {
            show: false
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
        <h6 style={{ textAlign: "center", paddingTop: 10 }}>
          Rental Price Per Week
          <span>
            {" "}
            <i
              className="fas fa-info-circle"
              data-tip
              data-for="rentalTool"
              style={{
                cursor: "pointer",
                color: "#2962ff",
                position: "relative",
                zIndex: 0
              }}
            />
          </span>
          <ReactTooltip
            place="bottom"
            id="rentalTool"
            type="info"
            effect="solid"
          >
            <p style={{ width: "250px", textAlign: "left" }}>
              The graph shows the weekly rental price in dollars for each type
              of property for the suburb involved and the average rental price
              for the suburb’s Local Government Area.
            </p>
          </ReactTooltip>
        </h6>
        <div id="chart" style={{ opacity: "1" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="400"
            width="95%"
            style={{ marginLeft: "10px" }}
          />
        </div>
        <p style={{ fontSize: "10px", textAlign: "right" }}>
          *Last Updated: 2018
        </p>
      </React.Fragment>
    );
  }
}
