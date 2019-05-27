import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "./SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext, ChoiceContext } from "../context/ParameterContext";
import { Fade } from "react-reveal";
import { recommd, paginate } from "../services/recommend";
import { recReducer } from "./../reducer/recReducer";
import { cityReducer } from "./../reducer/cityReducer";
import CheckList from "./../common/CheckList";
import Pagination from "../common/Pagination";
import SearchBox from "./../common/SearchBox";
import { withApollo } from "react-apollo";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSuburbsQuery } from "../../queries/queries";

const Recommender = props => {
  // document.title = "Recommend";

  //initial socre, if there are score store in seesionStorage read from there, if not initialise the score to 2,2,2
  function inital() {
    let value;
    try {
      value = JSON.parse(window.sessionStorage.getItem("score")) || {
        healthScore: 2,
        educationScore: 2,
        propertyScore: 2
      };
    } catch (e) {
      console.log(e);
    }
    return value;
  }

  //initilised score and set the dispatch
  const [scoreState, stateDispatch] = useReducer(recReducer, inital());
  //store the score to seesion storage
  useEffect(() => {
    window.sessionStorage.setItem("score", JSON.stringify(scoreState));
  }, [scoreState]);

  //initialise the city choice option with dispatch
  const [city, cityDispatch] = useReducer(cityReducer, {
    geelong: true,
    ballarat: true,
    bendigo: true
  });

  //states manage pagination
  const [totalcount, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [pagedSub, setPaged] = useState(
    paginate(suburbs, currentPage, pageSize)
  );
  //context of getting choosed field
  const { choice, choiceDispatch, setSubList } = useContext(ChoiceContext);
  const [query, setQuery] = useState("");

  //initialise suburb with dummny data
  const [suburbs, setSuburbs] = useState([
    {
      _id: "NA",
      city: "NA",
      name: "NA",
      rating: {
        healthScore: 0.0,
        educationScore: 0.0,
        propertyScore: 0.0
      }
    }
  ]);

  const [filterSuburb, setFilter] = useState([]);
  //hook to get data from backend and initialise the page
  useEffect(() => {
    props.client
      .query({
        query: getSuburbsQuery
      })
      .then(({ data }) => {
        setSuburbs(recommd(scoreState, data.suburbs));
        setFilter(recommd(scoreState, data.suburbs));
        setTotal(data.suburbs.length);
        setSubList(data.suburbs);
      });
  }, []);

  //hook to triger when suburbs changes
  useEffect(() => {
    setPaged(paginate(suburbs, currentPage, pageSize));
  }, [suburbs]);

  //hook to cacluate the distance when the score state is changed
  useEffect(() => {
    //caculate difference score.
    setSuburbs(recommd(scoreState, suburbs));
    setSubList(suburbs);
    //don't understand this code but add this line suburb list will update immidiately
    // setInitialSuburb(initialSuburb);
  }, [scoreState]);

  //effect for pagination
  useEffect(() => {
    setPaged(paginate(filterSuburb, currentPage, pageSize));
  }, [scoreState, currentPage]);

  //effect for search box
  useEffect(() => {
    getSearchSuburb();
  }, [query]);

  //effect to filter by city
  useEffect(() => {
    filterSuburbByCity();
  }, [city, scoreState]);

  function handleSearch(query) {
    setQuery(query);
  }

  //dispatch actions to choose sliders and city filter at Recommder page
  function choseHealth() {
    if (choice.healthField === true) {
      choiceDispatch({ type: "HEALTHFIELD", payload: false });
      stateDispatch({ type: "HEALTH", payload: 0 });
    } else {
      choiceDispatch({ type: "HEALTHFIELD", payload: true });
      stateDispatch({ type: "RESETHEALTH" });
    }
  }
  function choseEdu() {
    if (choice.educationField === true) {
      choiceDispatch({ type: "EDUCATIONFIELD", payload: false });
      stateDispatch({ type: "EDUCATION", payload: 0 });
    } else {
      choiceDispatch({ type: "EDUCATIONFIELD", payload: true });
      stateDispatch({ type: "RESETEDU" });
    }
  }
  function choseProp() {
    if (choice.propertyField === true) {
      choiceDispatch({ type: "PROPERTYFIELD", payload: false });
      stateDispatch({ type: "PROPERTY", payload: 0 });
    } else {
      choiceDispatch({ type: "PROPERTYFIELD", payload: true });
      stateDispatch({ type: "RESETPROP" });
    }
  }

  function choseGeelong() {
    cityDispatch({ type: "Geelong", payload: !city.geelong });
  }
  function choseBallarat() {
    cityDispatch({ type: "Ballarat", payload: !city.ballarat });
  }
  function choseBendigo() {
    cityDispatch({ type: "Bendigo", payload: !city.bendigo });
  }

  //from old feature, keep in case need to bring it back
  // function choseJob() {
  //   choiceDispatch({ type: "JOBFIELD", payload: !choice.jobField });
  //   stateDispatch({ type: "RESETJOB" });
  // }
  //function to filter suburb based on the query, responsible to the search box
  function getSearchSuburb() {
    let filtered = suburbs;
    if (query)
      filtered = suburbs.filter(s =>
        s.suburbName.toLowerCase().includes(query.toLowerCase())
      );
    setTotal(filtered.length);
    setFilter(filtered);
    return setPaged(paginate(filtered, currentPage, pageSize));
  }

  //funciton to handle change page in the pagination
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  //function to set to a page
  function toPage(page) {
    setCurrentPage(page);
  }

  //function to filter by city
  function filterSuburbByCity() {
    let filtered = suburbs;
    if (city.geelong && city.ballarat && city.bendigo) {
      filtered = suburbs;
    } else {
      if (city.geelong === false)
        filtered = suburbs.filter(s => s.city !== "Greater Geelong");
      if (city.ballarat === false)
        filtered = suburbs.filter(s => s.city !== "Ballarat");
      if (city.bendigo === false)
        filtered = suburbs.filter(s => s.city !== "Greater Bendigo");
      if (
        city.geelong === false &&
        city.ballarat === false &&
        city.bendigo === true
      ) {
        filtered = suburbs.filter(s => s.city === "Greater Bendigo");
      }
      if (
        city.geelong === false &&
        city.ballarat === true &&
        city.bendigo === false
      ) {
        filtered = suburbs.filter(s => s.city === "Ballarat");
      }
      if (
        city.geelong === true &&
        city.ballarat === false &&
        city.bendigo === false
      ) {
        filtered = suburbs.filter(s => s.city === "Greater Geelong");
      }
    }
    setTotal(filtered.length);
    setFilter(filtered);
    return setPaged(paginate(filtered, currentPage, pageSize));
  }

  //function to hanle preives page and next page for the ranked suburb list
  function handlePreNext(flag, pages) {
    let temp = currentPage;
    if (flag && currentPage > 1) temp--;
    if (flag === false && currentPage < pages.length) temp++;
    setCurrentPage(temp);
  }

  //actions pass to CheckList component
  const choices = [
    { label: "Health", chose: choice.healthField, action: choseHealth },
    { label: "Education", chose: choice.educationField, action: choseEdu },
    { label: "Property", chose: choice.propertyField, action: choseProp }
  ];

  const cities = [
    { label: "Geelong", select: city.geelong, action: choseGeelong },
    { label: "Ballarat", select: city.ballarat, action: choseBallarat },
    { label: "Bendigo", select: city.bendigo, action: choseBendigo }
  ];

  // const l
  return (
    <>
      <div className="recpage">
        <div className="recommender container-fluid">
          <div className="container" />
          <div className="row">
            <div
              className="col s12 m2"
              style={{ marginTop: 50, marginLeft: 50 }}
            >
              <Fade left duration={1000}>
                {/* Component of CheckList */}
                <CheckList choices={choices} cities={cities} />
              </Fade>
            </div>
            <div className="col s12 m4 offset-m1">
              <ParameterContext.Provider value={{ stateDispatch, scoreState }}>
                <Fade bottom duration={1000}>
                  {/* componemt of the slider handle the score change*/}
                  <SidePanel />
                </Fade>
              </ParameterContext.Provider>
            </div>
            <div className="col s12 m4" style={{ marginTop: 18 }}>
              <Fade right duration={1000}>
                {/* if the suburb is not loaded from databse render a circularprogress */}
                {suburbs.length === 1 ? (
                  <div
                    className="container"
                    style={{ paddingLeft: 100, marginTop: 200 }}
                  >
                    <CircularProgress />
                  </div>
                ) : (
                  <>
                    <SearchBox value={query} onChange={handleSearch} />
                    <h5 style={{ marginLeft: "5vw" }}>Ranked Suburbs </h5>
                    <span style={{ marginLeft: "5vw", fontSize: "13px" }}>
                      (Click on a suburb to view more details and compare)
                    </span>

                    <SuburbList
                      suburbs={pagedSub}
                      choice={choice}
                      city={city}
                    />
                  </>
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
    </>
  );
};
// export default graphql(getSuburbsQuery)(Recommender);
export default withApollo(Recommender);
