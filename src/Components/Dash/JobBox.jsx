import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function JobBox({ data }) {
  const [job, setJob] = useState(0);
  useEffect(() => {
    sumJobs();
  }, []);

  function sumJobs() {
    let sum = 0;
    for (var key in data) {
      if (!isNaN(data[key])) sum += data[key];
    }
    setJob(sum);
  }
  return (
    <div
      style={{
        width: "95%",
        height: "14vh",
        background: "#E1EAA7",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        textAlign: "center"
      }}
    >
      <div
        className="content"
        style={{ paddingTop: "10px", marginTop: "10px" }}
      >
        <div className="row">
          <div className="col s3 m3">
            <img src={"/job.png"} alt="" />
          </div>
          <div className="col s8 m8 offset-m1">
            <h6>Job</h6>
            <CountUp
              start={0}
              end={job}
              duration={1.4}
              separator=","
              decimals={0}
              prefix="Size of Industry: "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
