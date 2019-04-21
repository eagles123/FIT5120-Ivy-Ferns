import React from "react";
import Chart from "react-apexcharts";

export default class JobChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: 1,
          style: {
            fontSize: "12px",
            colors: ["#304758", "#e91e63"]
          }
        },
        xaxis: {
          categories: [
            "Agriculture, Forestry and Fishing",
            "Mining",
            "Manufacturing",
            "Electricity Gas, Water and Waste Services",
            "Construction",
            "Wholesale trade",
            "Retail Trade",
            "Accommodation and Food Services",
            "Transport, Postal and Warehousing",
            "Information Media and Telecommunications",
            "Financial and Insurance Services",
            "Rental, Hiring and Real Estate Services",
            "Professional, Scientific and Technical Services",
            "Administrative and Support Services",
            "Public Administration and Safety",
            "Education and Training",
            "Health Care and Social Assistance",
            "Arts and Recreation Services",
            "Other Services"
          ],
          position: "bottom",
          labels: {
            offsetY: 0
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.55,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
          labels: {
            show: true
          }
        },
        title: {
          text: "Job Oppotunities",
          floating: true,
          offsetY: 10,
          align: "center",
          style: {
            color: "#444"
          }
        }
      },
      series: [
        {
          name: "Job Numbers",
          data: []
        }
      ]
    };
  }

  componentWillMount() {
    const { data } = this.props;
    let temp = [{ name: "Job Numbers", data: [] }];
    for (var job in data) {
      temp[0].data.push(data[job]);
    }
    this.setState({ series: temp });
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
          width="85%"
        />
      </div>
    );
  }
}
