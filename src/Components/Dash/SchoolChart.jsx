import React from "react";
import Chart from "react-apexcharts";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import _ from "lodash";

export default class SchoolChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: "Primary",
      label: "LAG_Average",
      field: "ICSEA",
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
    this.setSchool(this.state.primary_school, "ICSEA", "LAG_Average");
  }
  //load the data to state
  componentWillMount() {
    const { data } = this.props;
    let pre = [];
    let pri = [];
    let sec = [];
    data.map(item => {
      if (item.school_type === "Pre") pre.push(item);
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
      if (serisone === "ICSEA") {
        newSeris[0].data.push(school.icsea);
        newSeris[1].data.push(school.lga_average);
      } else if (serisone === "Teacher/Student") {
        newSeris[0].data.push(school.ts_ration);
        newSeris[1].data.push(school.ts_average);
      } else {
        newSeris[0].data.push(school.enrolments);
        newSeris[1].data.push(school.enro_averge);
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
    if (event.target.value === "ICSEA") {
      this.setState({ field: event.target.value, label: "LGA_Average" }, () => {
        this.reRender();
      });
    } else if (event.target.value === "Teacher/Student")
      this.setState(
        {
          field: event.target.value,
          label: "Teacher/Student Ratio"
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

  render() {
    return (
      <React.Fragment>
        <FormControl style={{ minWidth: 90, height: "6vh", marginLeft: "6vw" }}>
          <InputLabel>School Type</InputLabel>
          <Select value={this.state.choice} onChange={this.handleSchoolChange}>
            <MenuItem value={"Primary"}>Primary School</MenuItem>
            <MenuItem value={"Secondary"}>Secondary School</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: 90, height: "6vh", marginLeft: "3vw" }}>
          <InputLabel>Field</InputLabel>
          <Select value={this.state.field} onChange={this.handleFieldChange}>
            <MenuItem value={"ICSEA"}>ICSEA Score</MenuItem>
            <MenuItem value={"Teacher/Student"}>Teacher/Student</MenuItem>
            <MenuItem value={"Enrollment"}>Enrollment</MenuItem>
          </Select>
        </FormControl>
        <div id="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="350"
            width="85%"
          />
        </div>
      </React.Fragment>
    );
  }
}
