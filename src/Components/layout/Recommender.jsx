import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "./SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext, ChoiceContext } from "../context/ParameterContext";
import { Fade } from "react-reveal";
import { recommd, paginate } from "../services/recommend";
import { recReducer } from "./../reducer/recReducer";
import CheckList from "./../common/CheckList";
import Pagination from "../common/Pagination";
import { getallSuburbs } from "./../services/suburbs";
import SearchBox from "./../common/SearchBox";
import StyledButton from "./../common/StyleButton";
import { graphql } from "react-apollo";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSuburbsQuery } from "../../queries/queries";

const Recommender = props => {
  const [scoreState, stateDispatch] = useReducer(recReducer, {
    healthScore: 0,
    educationScore: 0,
    propertyScore: 0,
    jobScore: 0
  });

  //use local data for development
  const [suburbs, setSuburbs] = useState(getallSuburbs);
  useEffect(() => {
    setSuburbs(recommd(scoreState, suburbs));
  }, [scoreState]);

  // initialise suburb with dummny data
  // const [suburbs, setSuburbs] = useState([
  //   {
  //     _id: "NA",
  //     city: "NA",
  //     name: "NA",
  //     rating: {
  //       healthScore: 0.0,
  //       educationScore: 0.0,
  //       propetyScore: 0.0,
  //       jobScore: 0.0
  //     }
  //   }
  // ]);
  // //equal to componentDidMount to update the suburbs with data from databse
  // useEffect(() => {
  //   if (props.data.loading);
  //   else {
  //     setSuburbs(recommd(scoreState, props.data.suburbs));
  //     setPaged(paginate(suburbs, currentPage, pageSize));
  //     setTotal(suburbs.length);
  //   }
  // }, [suburbs, props.data.loading]);

  //state and reducer to maniplate the user input slider value

  //count number for pagenated data pass to Pagination component
  const [totalcount, setTotal] = useState(0);
  //states manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [pagedSub, setPaged] = useState(
    paginate(suburbs, currentPage, pageSize)
  );
  const { choice, choiceDispatch, setSubList } = useContext(ChoiceContext);
  const [query, setQuery] = useState("");

  //cacluate the distance when the score state is changed
  useEffect(() => {
    //caculate difference score.
    setSuburbs(recommd(scoreState, suburbs));
    setSubList(suburbs);
    //don't understand this code but add this line suburb list will update immidiately
    // setInitialSuburb(initialSuburb);
  }, [scoreState]);

  //effect for pagination
  useEffect(() => {
    setPaged(paginate(suburbs, currentPage, pageSize));
  }, [scoreState, currentPage]);

  //effect for search box
  useEffect(() => {
    getSearchData();
  }, [query]);

  function handleSearch(query) {
    setQuery(query);
  }

  //dispatch actions to show sliders at Recommder
  function choseHealth() {
    choiceDispatch({ type: "HEALTHFIELD", payload: !choice.healthField });
    stateDispatch({ type: "RESETHEALTH" });
  }

  function choseEdu() {
    choiceDispatch({ type: "EDUCATIONFIELD", payload: !choice.educationField });
    stateDispatch({ type: "RESETEDU" });
  }
  function choseProp() {
    choiceDispatch({ type: "PROPERTYFIELD", payload: !choice.propertyField });
    stateDispatch({ type: "RESETPROP" });
  }
  function choseJob() {
    choiceDispatch({ type: "JOBFIELD", payload: !choice.jobField });
    stateDispatch({ type: "RESETJOB" });
  }
  function getSearchData() {
    let filtered = suburbs;
    if (query)
      filtered = suburbs.filter(s =>
        s.suburbName.toLowerCase().includes(query.toLowerCase())
      );
    setTotal(filtered.length);
    return setPaged(paginate(filtered, currentPage, pageSize));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  //function to set to a page
  function toPage(page) {
    setCurrentPage(page);
  }

  function handlePreNext(flag, pages) {
    let temp = currentPage;
    if (flag && currentPage > 1) temp--;
    if (flag === false && currentPage < pages.length) temp++;
    setCurrentPage(temp);
  }

  function handleBack() {
    props.history.push("/intro");
  }

  //actions pass to CheckList component
  const choices = [
    { label: "Health", chose: choice.healthField, action: choseHealth },
    { label: "Education", chose: choice.educationField, action: choseEdu },
    { label: "Property", chose: choice.propertyField, action: choseProp },
    { label: "Employment", chose: choice.jobField, action: choseJob }
  ];

  return (
    <React.Fragment>
      <div className="recpage">
        <div className="recommender container-fluid">
          <div className="container">{/* <ToggleButtons /> */}</div>
          <div className="row">
            <div className="col s12 m2" style={{ marginTop: 50 }}>
              <Fade left duration={1000}>
                <StyledButton onClick={handleBack}>Back</StyledButton>
                <CheckList choices={choices} />
              </Fade>
            </div>
            <div className="col s12 m4 offset-m1 ">
              <ParameterContext.Provider value={{ stateDispatch, scoreState }}>
                <Fade bottom duration={1000}>
                  <SidePanel data={scoreState} />
                </Fade>
              </ParameterContext.Provider>
            </div>
            <div className="col s12 m4" style={{ marginTop: 18 }}>
              <Fade right duration={1000}>
                <h5 style={{ textAlign: "center" }}>Ranked Suburbs</h5>
                <SearchBox value={query} onChange={handleSearch} />
                {suburbs.length === 1 ? (
                  <CircularProgress />
                ) : (
                  <SuburbList suburbs={pagedSub} choice={choice} />
                )}
                <Pagination
                  itemNumber={totalcount}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                  onPreNext={handlePreNext}
                  toPage={toPage}
                  choice={choice}
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </React.Fragment>
  );
};
// export default graphql(getSuburbsQuery)(Recommender);
export default Recommender;
