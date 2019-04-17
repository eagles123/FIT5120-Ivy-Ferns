import React from "react";
//search  a specific suburb from the ranked list 
export default function SearchBox({ value, onChange }) {
  return (
    <React.Fragment>
      <input
        id="searchBox"
        placeholder="  Search suburb..."
        type="text"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        style={{ width: "300px", marginLeft: "50px" }}
      />
    </React.Fragment>
  );
}
