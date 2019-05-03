import { gql } from "apollo-boost";

export const getSuburbsQuery = gql`
  {
    suburbs {
      _id
      city
      suburbName
      rating {
        healthScore
        educationScore
        propertyScore
        jobScore
      }
    }
  }
`;

export const getNeighbourThings = gql`
  query($name: [String]) {
    suburbsByName(suburbNames: $name) {
      hosptials {
        hospital_name
        beds
        url
        longitude
        latitude
      }
      schools {
        school_name
        school_type
        url
        longitude
        latitude
      }
    }
  }
`;

// export const getComparsion = gql`
//   query($ids: [String]) {
//     suburbsById(suburbIds: ids) {
//       city
//       suburbName
//       education {
//         pre_school
//         primary_school
//         secondary_school
//       }
//       health {
//         hospital
//         gps
//         beds
//       }
//       property {
//         price
//       }
//     }
//   }
// `;

export const getSuburbByIdQuery = gql`
  query($id: ID) {
    suburb(id: $id) {
      _id
      city
      suburbName
      health {
        hospital
        gps
        beds
      }
      hosptials {
        hospital_name
        beds
        url
        longitude
        latitude
      }
      education {
        pre_school
        primary_school
        secondary_school
      }
      property {
        price
        flat1
        flat1_avg
        flat2
        flat2_avg
        flat3
        flat3_avg
        house2
        house2_avg
        house3
        house3_avg
        house4
        house4_avg
      }
      schools {
        school_name
        school_type
        icsea
        lga_average
        vce_score
        vce_average
        enrolments
        enrol_average
        url
        longitude
        latitude
      }
      neighbours {
        neighbour
      }
    }
  }
`;
