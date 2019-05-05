import React, { useState, useContext, useEffect } from "react";
import { ChoiceContext } from "../context/ParameterContext";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";
import CompareList from "./../common/CompareList";
import CompareTable from "./../common/CompareTable";

let tempList = [];
function Compare({ data, client, match }) {
  const { suburbList } = useContext(ChoiceContext);

  const [compareSuburbs, setSuburbs] = useState([]);
  //state and method to handle check list in compare
  const [checked, setChecked] = useState([match.params.id]);
  function handelCheck(value) {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1 && checked.length < 4) {
      newChecked.push(value);
    } else if (currentIndex === -1 && checked.length === 4) {
      alert("Three Max");
    } else if (currentIndex !== -1 && checked.length <= 4) {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }
  useEffect(() => {
    if (data.loading === false) setSuburbs([data.suburb]);
  }, [data.loading]);

  //hook to fetch new data and to delet the suburb from the compareSuburbs list
  useEffect(() => {
    if (checked.length > tempList.length) {
      tempList = checked;
      client
        .query({
          query: getSuburbByIdQuery,
          variables: { id: checked[checked.length - 1] }
        })
        .then(({ data }) => {
          console.log(data.suburb);
          const newSuburb = [...compareSuburbs];
          newSuburb.push(data.suburb);
          setSuburbs(newSuburb);
        });
    } else if (checked.length <= tempList.length) {
      tempList = checked;
      const newSuburb = compareSuburbs.filter(s => checked.includes(s._id));
      setSuburbs(newSuburb);
    }
  }, [checked]);

  return (
    <div className="container-fluid">
      <h4>Compare Suburbs</h4>
      <div className="row">
        <div className="col s2 m2">
          <CompareList
            suburbList={suburbList}
            checked={checked}
            handelCheck={handelCheck}
          />
        </div>
        <div className="col s9 m9" style={{ marginLeft: "50px" }}>
          <CompareTable compareSuburbs={compareSuburbs} />
        </div>
      </div>
    </div>
  );
}

export default withApollo(
  graphql(getSuburbByIdQuery, {
    options: props => {
      return {
        variables: {
          id: props.match.params.id
        }
      };
    }
  })(Compare)
);
