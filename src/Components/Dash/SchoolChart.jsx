import React from "react";
import Chart from "react-apexcharts";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ReactTooltip from "react-tooltip";

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

  renderNodata() {
    if (
      this.state.primary_school.length === 0 &&
      this.state.secondary_school.length === 0
    )
      return (
        <div>
          <img
            style={{
              marginLeft: "15%",
              marginTop: "5%",
              width: "65%",
              height: "300px"
            }}
            src={"/both.jpg"}
          />
        </div>
      );
    else if (
      this.state.primary_school.length === 0 &&
      this.state.secondary_school.length !== 0
    )
      return (
        <div>
          <img
            style={{
              marginLeft: "15%",
              marginTop: "5%",
              width: "65%",
              height: "300px"
            }}
            src={"/primaryNodata.jpg"}
          />
        </div>
      );
    else if (
      this.state.secondary_school.length === 0 &&
      this.state.primary_school.length !== 0
    )
      return (
        <div>
          <img
            style={{
              marginLeft: "15%",
              marginTop: "5%",
              width: "65%",
              height: "300px"
            }}
            src={"/secondaryNodata.jpg"}
          />
        </div>
      );
  }

  render() {
    return (
      <React.Fragment>
        <h6 style={{ textAlign: "center", paddingTop: 10 }}>
          School Statistics
          <span>
            {" "}
            <i
              className="fas fa-info-circle"
              data-tip
              data-for="schoolTool"
              style={{
                cursor: "pointer",
                color: "#2962ff",
                position: "relative",
                zIndex: 200
              }}
            />
          </span>
        </h6>
        <ReactTooltip place="bottom" id="schoolTool" type="info" effect="solid">
          <p style={{ width: "250px", textAlign: "left" }}>
            The graph shows the primary and secondary schools located in this
            suburb. The ICSEA Score and enrolment of both secondary and primary
            schools are shown as compared to the average scores of the LGA.
            Secondary schools also have a VCE score and an LGA average.
          </p>
        </ReactTooltip>
        <FormControl style={{ minWidth: 90, height: "6vh", marginLeft: "30%" }}>
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
          this.renderNodata()
        ) : (
          <div id="chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="300"
              width="95%"
              style={{ marginLeft: "10px" }}
            />
            <p style={{ fontSize: "10px", textAlign: "right" }}>
              Last Updated: 2018
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}
