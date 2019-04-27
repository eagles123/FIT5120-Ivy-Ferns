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

export const getSuburbByIdQuery = gql`
  query($id: ID) {
    suburb(id: $id) {
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
      job {
        agriculture
        mining
        manufacture
        power_gas_water
        construction
        wholesale
        retail
        acc_food
        transport
        it
        finance_insure
        real_estate
        professional
        admin
        public
        health_care
        art
        other
      }
    }
  }
`;
