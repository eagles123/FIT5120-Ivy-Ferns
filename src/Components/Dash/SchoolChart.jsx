import React from "react";
import Chart from "react-apexcharts";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default class SchoolChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "Primary",
      label: "LGA_Average - Average of ICSEA Score in Local Government Area",
      field: "ICSEA - Index of Community Social-Educational Advantage",
      pre_school: [],
      primary_school: [],
      secondary_school: [],
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
          categories: []
        }
        // title: {
        //   text: "School Statistics",
        //   floating: true,
        //   offsetY: 10,
        //   align: "center",
        //   style: {
        //     color: "#444"
        //   }
        // }
      },
      series: [
        {
          data: []
        },
        {
          data: []
        }
      ]
    };
  }

  componentDidMount() {
    this.setSchool(
      this.state.primary_school,
      "ICSEA - Index of Community Social-Educational Advantage",
      "LGA_Average - Average of ICSEA Score in Local Government Area"
    );
  }
  //load the data to state
  componentWillMount() {
    const { data } = this.props;
    let pre = [];
    let pri = [];
    let sec = [];
    data.map(item => {
      if (item.school_type === "Preschool") pre.push(item);
      else if (item.school_type === "Primary") pri.push(item);
      else sec.push(item);
    });
    this.setState({
      pre_school: pre,
      primary_school: pri,
      secondary_school: sec
    });
  }

  setSchool(schools, serisone, seriostwo) {
    let cat = [];
    let newSeris = [{ name: "", data: [] }, { name: "", data: [] }];
    // console.log(series[1].data);
    schools.map(school => {
      cat.push(school.school_name);
      newSeris[0].name = serisone;
      newSeris[1].name = seriostwo;
      if (
        serisone === "ICSEA - Index of Community Social-Educational Advantage"
      ) {
        newSeris[0].data.push(school.icsea);
        newSeris[1].data.push(school.lga_average);
      } else if (
        serisone ===
        "VCE - Victorian Certificate of Education (VCE) Study Score"
      ) {
        newSeris[0].data.push(school.vce_score);
        newSeris[1].data.push(school.vce_average);
      } else {
        newSeris[0].data.push(school.enrolments);
        newSeris[1].data.push(school.enrol_average);
      }
    });
    this.setState({
      series: newSeris,
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: cat
        }
      }
    });
  }

  // setPrimarySchool() {
  //   let cat = [];
  //   let newSeris = [{ name: "", data: [] }, { name: "", data: [] }];
  //   // console.log(series[1].data);
  //   this.state.primary_school.map(school => {
  //     cat.push(school.school_name);
  //     newSeris[0].name = "ICSEA";
  //     newSeris[0].data.push(school.icsea);
  //     newSeris[1].name = "LAG_Average";
  //     newSeris[1].data.push(school.lga_average);
  //   });
  //   this.setState({
  //     series: newSeris,
  //     options: {
  //       ...this.state.options,
  //       xaxis: {
  //         ...this.state.options.xaxis,
  //         categories: cat
  //       }
  //     }
  //   });
  // }

  // setSecondarySchool(serisone, seristwo) {
  //   let cat = [];
  //   let newSeris = [{ name: "", data: [] }, { name: "", data: [] }];

  //   // console.log(series[1].data);
  //   this.state.secondary_school.map(school => {
  //     cat.push(school.school_name);
  //     newSeris[0].name = "ICSEA";
  //     newSeris[0].data.push(school.icsea);
  //     newSeris[1].data.push(school.lga_average);
  //     newSeris[1].name = "LAG_Average";
  //   });
  //   this.setState({
  //     series: newSeris,
  //     options: {
  //       ...this.state.options,
  //       xaxis: {
  //         ...this.state.options.xaxis,
  //         categories: cat
  //       }
  //     }
  //   });
  // }

  handleSchoolChange = event => {
    this.setState({ choice: event.target.value });
    if (event.target.value === "Primary")
      this.setSchool(
        this.state.primary_school,
        this.state.field,
        this.state.label
      );
    else
      this.setSchool(
        this.state.secondary_school,
        this.state.field,
        this.state.label
      );
  };

  reRender() {
    if (this.state.choice === "Primary") {
      this.setSchool(
        this.state.primary_school,
        this.state.field,
        this.state.label
      );
    } else if (this.state.choice === "Secondary")
      this.setSchool(
        this.state.secondary_school,
        this.state.field,
        this.state.label
      );
  }

  handleFieldChange = event => {
    if (
      event.target.value ===
      "ICSEA - Index of Community Social-Educational Advantage"
    ) {
      this.setState(
        {
          field: event.target.value,
          label: "LGA_Average - Average of ICSEA Score in Local Government Area"
        },
        () => {
          this.reRender();
        }
      );
    } else if (
      event.target.value ===
      "VCE - Victorian Certificate of Education (VCE) Study Score"
    )
      this.setState(
        {
          field: event.target.value,
          label: "Average VCE"
        },
        () => {
          this.reRender();
        }
      );
    else if (event.target.value === "Enrollment") {
      this.setState(
        { field: event.target.value, label: "Average Enrollment" },
        () => {
          this.reRender();
        }
      );
    }
  };

  handleEmpty() {
    if (this.state.choice === "Primary")
      return this.state.primary_school.length === 0;
    else if (this.state.choice === "Secondary")
      return this.state.secondary_school.length === 0;
  }

  render() {
    return (
      <React.Fragment>
        <h6 style={{ textAlign: "center" }}>School Statistics</h6>
        <FormControl style={{ minWidth: 90, height: "6vh", marginLeft: "6vw" }}>
          <InputLabel>School Type</InputLabel>
          <Select value={this.state.choice} onChange={this.handleSchoolChange}>
            {this.state.primary_school === 0 ? null : (
              <MenuItem value={"Primary"}>Primary School</MenuItem>
            )}
            {this.state.secondary_school === 0 ? null : (
              <MenuItem value={"Secondary"}>Secondary School</MenuItem>
            )}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 90, height: "6vh", marginLeft: "3vw" }}>
          <InputLabel>Field</InputLabel>
          <Select value={this.state.field} onChange={this.handleFieldChange}>
            <MenuItem
              value={"ICSEA - Index of Community Social-Educational Advantage"}
            >
              ICSEA Score
            </MenuItem>
            {this.state.choice === "Secondary" ? (
              <MenuItem
                value={
                  "VCE - Victorian Certificate of Education (VCE) Study Score"
                }
              >
                VCE Score
              </MenuItem>
            ) : null}

            <MenuItem value={"Enrollment"}>Enrollment</MenuItem>
          </Select>
        </FormControl>
        {this.handleEmpty() ? (
          <img
            style={{ marginTop: "20px", marginLeft: "20px" }}
            src={"/nodata.jpg"}
          />
        ) : (
          <div id="chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="350"
              width="95%"
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
