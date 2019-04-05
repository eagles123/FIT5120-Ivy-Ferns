import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Button } from "@material-ui/core";
import { LightSpeed } from "react-reveal";
import StyledButton from "./StyleButton";

class Pagination extends Component {
  render() {
    const {
      pageSize,
      itemNumber,
      onPageChange,
      currentPage,
      onPreNext
    } = this.props;

    const pagesCount = Math.ceil(itemNumber / pageSize);
    if (pagesCount <= 1) return null;
    //generate a array using lodash
    const pages = _.range(1, pagesCount + 1);
    return (
      <div className="col s12 m8 offset-m3">
        <ul className="pagination">
          {/* <li className="page-item">
            <i
              class="fas fa-chevron-left fa-3x"
              style={{ cursor: "pointer" }}
            />
          </li> */}
          <li className="page-item">
            <Button
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

          {/* <li className="page-item">
            <i
              class="fas fa-chevron-right fa-3x"
              style={{ cursor: "pointer" }}
            /> */}
          <li className="page-item">
            <Button
              color="primary"
              variant="contained"
              size="small"
              className="page-link"
              onClick={() => onPreNext(false, pages)}
            >
              <span style={{ fontSize: "15px" }}>Next</span>
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
//Type checking

export default Pagination;
