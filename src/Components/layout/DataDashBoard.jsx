import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";

export default function DataDashBoard(props) {
  const [id, setId] = useState(props.match.params.id);

  return (
    <div className="dashboard container" style={{ paddingTop: 30 }}>
      <h2>{id}</h2>
    </div>
  );
}
