import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";
import DashList from "../Dash/DashList";
import HealthBox from "./../Dash/HealthBox";
import EdBox from "../Dash/EdBox";
import PropBox from "../Dash/PropBox";
import JobBox from "../Dash/JobBox";
import SchoolChart from "../Dash/SchoolChart";
import JobChart from "./../Dash/JobChart";
import MyMap from "./../Dash/MyMap";
import StyledButton from "./../common/StyleButton";

function DataDashBoard(props) {
  const [mockData, setMock] = useState({
    suburb: {
      city: "Ballarat",
      suburbName: "Ballarat Central",
      health: {
        hospital: 3,
        gps: 73,
        beds: 450
      },
      hosptials: [
        {
          hospital_name: "St John Of God Ballarat",
          beds: 25,
          longitude: 143.8475999982,
          latitude: -37.5575000004
        },
        {
          hospital_name: "Ballarat Base Public Hospital",
          beds: 350,
          longitude: 143.8474000026,
          latitude: -37.5586999981
        },
        {
          hospital_name: "Queen Elizabeth Ballarat",
          beds: 75,
          longitude: 143.8418999984,
          latitude: -37.5639000004
        }
      ],
      education: {
        pre_school: 3,
        primary_school: 0,
        secondary_school: 0
      },
      property: {
        price: 422500
      },
      schools: [
        {
          school_name: "Bakery Hill Kindergarten",
          school_type: "Pre",
          icsea: 1026,
          lga_average: 1010,
          ts_ration: null,
          ts_average: 0.8,
          enro_averge: 80,
          enrolments: 596,
          longitude: 143.86,
          latitude: -37.56
        },
        {
          school_name: "FedUni Children's Centre at SMB",
          school_type: "Pre",
          icsea: null,
          lga_average: null,
          ts_ration: null,
          ts_average: 0.8,
          enro_averge: 80,
          enrolments: 900,
          longitude: 143.36,
          latitude: -37.56
        },
        {
          school_name: "Girrabanya Kindergarten",
          school_type: "Pre",
          icsea: 1030,
          lga_average: 1010,
          ts_ration: null,
          ts_average: null,
          enro_averge: 80,
          enrolments: 268,
          longitude: 143.66,
          latitude: -37.57
        },
        {
          school_name: "Whhhwhe",
          school_type: "Primary",
          icsea: 1030,
          lga_average: 1010,
          ts_ration: 0.01,
          ts_average: 0.1,
          enro_averge: 80,
          enrolments: 268,
          longitude: 143.86,
          latitude: -37.77
        },
        {
          school_name: "Girrabany",
          school_type: "Primary",
          icsea: 930,
          lga_average: 1010,
          ts_ration: 0.12,
          ts_average: 0.1,
          enro_averge: 80,
          enrolments: 268,
          longitude: 143.86,
          latitude: -37.28
        },
        {
          school_name: "FedUni SMB",
          school_type: "Secondary",
          icsea: 800,
          lga_average: null,
          ts_ration: 0.07,
          ts_average: 0.1,
          enro_averge: 80,
          enrolments: 700,
          longitude: 143.86,
          latitude: -37.56
        }
      ],
      job: {
        agriculture: 36,
        mining: 21,
        manufacture: 218,
        power_gas_water: 21,
        construction: 267,
        wholesale: 58,
        retail: 370,
        acc_food: 248,
        transport: 102,
        it: 75,
        finance_insure: 48,
        real_estate: 28,
        professional: 158,
        admin: 76,
        public: 173,
        health_care: 461,
        art: 80,
        other: 97
      }
    }
  });
  // const [id, setId] = useState(props.match.params.id);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   if (props.data.loading);
  //   else {
  //     setData(props.data.suburb);
  //   }
  // }, [props.data.loading]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12 m2">
          <StyledButton>Previous</StyledButton>
          <DashList />
        </div>
        <div className="col s12 m10 dashboard">
          <div className="row">
            <div className="boardbox col s2 m3">
              <HealthBox data={mockData.suburb.health} />
            </div>
            <div className="boardbox col s2 m3 ">
              <EdBox data={mockData.suburb.education} />
            </div>
            <div className="boardbox col s2 m3">
              <PropBox data={mockData.suburb.property} />
            </div>
            <div className="boardbox col s2 m3">
              <JobBox data={mockData.suburb.job} />
            </div>
          </div>
          <div className="row">
            <div className="col s5 m5 board">
              <MyMap data={mockData.suburb} />
            </div>
            <div className="col s6 m6 board">
              <SchoolChart data={mockData.suburb.schools} />
              <JobChart data={mockData.suburb.job} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default graphql(getSuburbByIdQuery, {
//   options: props => {
//     return {
//       variables: {
//         id: props.match.params.id
//       }
//     };
//   }
// })(DataDashBoard);
export default DataDashBoard;
