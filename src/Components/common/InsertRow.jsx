import React from "react";
import ImageCard from "./ImageCard";

export default function InsertRow() {
  function handlepeople() {}
  return (
    <div className="sssection ">
      <div className="insertRow">
        <div className="row" id="insertRow">
          <h4
            style={{
              color: "black",
              fontFamily: "Merriweather"
            }}
          >
            Why we do it?
          </h4>
          <br />
          <div className="col s12 m4">
            <ImageCard
              url={"./people.jpg"}
              title={"Increasing Population"}
              content1={
                "Melbourne recorded its highest-ever net annual population increase of 125,000."
              }
              content2={
                "According to predictions, Melbourne would be the most populated city of Australia by 2050 with 8 Million people."
              }
              website={
                "https://www.abc.net.au/news/2018-10-15/melbourne-will-be-australias-biggest-city-which-party-has-policy/10358988"
              }
            />
          </div>
          <div className="col s12 m4">
            <ImageCard
              url={"./passport.jpg"}
              title={"Changing Government Policies"}
              content1={
                "Australian Government is planning to change its policies for new migrants."
              }
              content2={
                "New Migrants may be forced to move to regional areas in Australia for at least 5 years."
              }
              website={
                "https://www.sbs.com.au/yourlanguage/punjabi/en/article/2018/08/29/new-migrants-may-have-live-regional-australia-5-years"
              }
            />
          </div>
          <div className="col s12 m4">
            <ImageCard
              url={"./home.jpg"}
              title={"Places To Move In Regional Victoria"}
              content1={
                "Geelong, Bendigo and Ballarat are more liveable than 2/3 of Melbourne."
              }
              content2={
                "Thus, we focus on these regions that are the major regional areas of Victoria."
              }
              website={
                "https://www.domain.com.au/news/geelong-bendigo-ballarat-liveable-melbourne-765701/ "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
