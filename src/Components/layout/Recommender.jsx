import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "./SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext, ChoiceContext } from "../context/ParameterContext";
import { Fade } from "react-reveal";
import { recommd, paginate } from "../services/recommend";
import { recReducer } from "./../reducer/recReducer";
import CheckList from "./../common/CheckList";
import NavBar from "./NavBar";
import Pagination from "../common/Pagination";
import { getallSuburbs } from "./../services/suburbs";
import SearchBox from "./../common/SearchBox";

const Recommender = () => {
  const { choice, choiceDispatch } = useContext(ChoiceContext);
  const [query, setQuery] = useState("");
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
        s.name.toLowerCase().includes(query.toLowerCase())
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

  //read in the data when compomentDidMount
  // useEffect(() => {
  //   getAllSuburbs;
  // }, []);

  //actions pass to CheckList component
  const choices = [
    { label: "Health", chose: choice.healthField, action: choseHealth },
    { label: "Education", chose: choice.educationField, action: choseEdu },
    { label: "Property", chose: choice.propertyField, action: choseProp },
    { label: "Employment", chose: choice.jobField, action: choseJob }
  ];
  //state and reducer to maniplate the user input slider value
  const [state, stateDispatch] = useReducer(recReducer, {
    healthScore: 0,
    educationScore: 0,
    propertyScore: 0,
    jobScore: 0
  });
  const [initialSuburb, setInitialSuburb] = useState(1);
  //get suburb data
  // const [suburbs, setSuburbs] = useState(getEverySuburbs);
  const [suburbs, setSuburbs] = useState(getallSuburbs);
  //count number for pagenated data pass to Pagination component
  const [totalcount, setTotal] = useState(0);
  //states manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [pagedSub, setPaged] = useState(
    paginate(suburbs, currentPage, pageSize)
  );
  //cacluate the distance when the state is changed

  useEffect(() => {
    setSuburbs(recommd(state, suburbs));

    //don't understand this code but add this line suburb list will update immidiately
    setInitialSuburb(initialSuburb);
    // let newList = recommd(state, initialSuburb);

    // setSuburbs(newList);
  }, [state]);

  //effect for pagination
  useEffect(() => {
    setPaged(paginate(suburbs, currentPage, pageSize));
    setInitialSuburb(initialSuburb);
  }, [state, currentPage]);

  //effect for search box
  useEffect(() => {
    getSearchData();
  }, [query]);

  return (
    <React.Fragment>
      <Fade top duration={1000}>
        <NavBar home={true} about={true} faqs={true} />
      </Fade>
      <div className="recommender container-fluid">
        <div className="container">{/* <ToggleButtons /> */}</div>
        <div className="row">
          <div className="col s12 m2" style={{ marginTop: 100 }}>
            <Fade left duration={1000}>
              <CheckList choices={choices} />
            </Fade>
          </div>
          <div className="col s12 m4 offset-m1 ">
            <ParameterContext.Provider value={{ stateDispatch, state }}>
              <Fade bottom duration={1000}>
                <SidePanel data={state} />
              </Fade>
            </ParameterContext.Provider>
          </div>
          <div className="col s12 m4" style={{ marginTop: 20, marginLeft: 20 }}>
            <Fade right duration={1000}>
              <SearchBox value={query} onChange={handleSearch} />
              {suburbs.length === 0 ? null : (
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
    </React.Fragment>
  );
};
export default Recommender;
