import React from "react";
import ImageCard from "./ImageCard";

export default function InsertRow() {
  return (
    <div className="sssection container">
      <h4>Why Should You Move?</h4>
      <hr style={{ width: "90%" }} />
      <br />
      <div className="row" id="insertRow">
        <div className="col s8 m4 image">
          <ImageCard
            style={{ paddingLeft: "50px" }}
            url={"./home1.jpg"}
            title={"Increasing Population in Melbourne"}
            content1={
              "Melbourne recorded its highest-ever net annual population increase of 125,000."
            }
            content2={
              "Melbourne would be the most populated city of Australia by 2050 with 8 Million people."
            }
            website={"https://storage.googleapis.com/ivypdf/Population.pdf"}
          />
        </div>
        <div className="col s8 m4 image">
          <ImageCard
            url={"./home2.jpg"}
            title={"Changing of Government Policies"}
            content1={
              "Australian Government is planning to change its policies for new migrants."
            }
            content2={
              "New Migrants may be forced to move to regional areas in Australia for at least 5 years."
            }
            website={"https://storage.googleapis.com/ivypdf/migrants.pdf"}
          />
        </div>
        <div className="col s8 m4 image">
          <ImageCard
            url={"./home3.jpg"}
            title={"Places To Move In Regional Victoria"}
            content1={
              "Geelong, Bendigo and Ballarat are more liveable than 2/3 of Melbourne."
            }
            content2={
              "Thus, we focus on these regions that are the major regional areas of Victoria."
            }
            website={
              "https://storage.googleapis.com/ivypdf/geelong%2C%20ballarat%20bendigo.pdf "
            }
          />
        </div>
      </div>
    </div>
  );
}
