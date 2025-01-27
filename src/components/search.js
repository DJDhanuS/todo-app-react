import React from "react";
import { Search } from "react-bootstrap-icons";

export const SearchBox = ({value, searchData}) => {
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div
        style={{
          border: "2px solid #F3F6F9",
          borderRadius: "4px",
          padding: "5px",
          verticalAlign: "center",
        }}
      >
        <Search style={{ color: "#034EA2", fontSize: "15px" }} />
        <input type="text" className="search-inp" placeholder=" Search To-Do" value={value} onChange={(e)=> searchData(e.target.value)}/>
      </div>
    </div>
  );
};
