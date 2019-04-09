import React, { Component } from "react";
import _ from "lodash";
import { Button } from "@material-ui/core";

class Pagination extends Component {
  render() {
    const {
      pageSize,
      itemNumber,
      currentPage,
      onPreNext,
      choice,
      toPage
    } = this.props;

    const pagesCount = Math.ceil(itemNumber / pageSize);
    if (pagesCount <= 1) return null;
    //generate a array using lodash
    const pages = _.range(1, pagesCount + 1);
    return (
      <div
        className="col s12 m8 offset-m3"
        style={{ marginTop: "0px", paddingTop: "0px" }}
      >
        {/* {choice.healthField ||
        choice.educationField ||
        choice.propertyField ||
        choice.jobField ? (
          <ul className="pagination">
            <li className="page-item">
              <i href="" onClick={() => console.log("Clicked <")}>
                First
              </i>
            </li>
            <li className="page-item">
              <Button
                disabled={currentPage === 1 ? true : false}
                color="primary"
                variant="contained"
                size="small"
                className="page-link"
                onClick={() => onPreNext(true, pages)}
              >
                <span style={{ fontSize: "15px" }}>Previous</span>
              </Button>
            </li>

            <span
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "black",
                fontSize: "20px"
              }}
            >
              {currentPage}
            </span>

            <li className="page-item">
              <Button
                disabled={currentPage === pagesCount ? "disable" : ""}
                color="primary"
                variant="contained"
                size="small"
                className="page-link"
                onClick={() => onPreNext(false, pages)}
              >
                <span style={{ fontSize: "15px" }}>Next</span>
              </Button>
            </li>
            <li className="page-item">
              <i href="" onClick={() => console.log("Clicked >")}>
                Last
              </i>
            </li>
          </ul>
        ) : null} */}
        {choice.healthField ||
        choice.educationField ||
        choice.propertyField ||
        choice.jobField ? (
          <ul className="pagination">
            <li className="page-item">
              <i className="fas fa-fast-backward" onClick={() => toPage(1)} />
            </li>
            <li className="page-item">
              <i
                className="fas fa-step-backward"
                onClick={() => onPreNext(true, pages)}
              />
            </li>

            <span
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "black",
                fontSize: "20px"
              }}
            >
              {currentPage}
            </span>

            <li className="page-item">
              <i
                className="fas fa-step-forward"
                onClick={() => onPreNext(false, pages)}
              />
            </li>
            <li className="page-item">
              <i
                className="fas fa-fast-forward"
                onClick={() => toPage(pagesCount)}
              />
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
//Type checking

export default Pagination;
