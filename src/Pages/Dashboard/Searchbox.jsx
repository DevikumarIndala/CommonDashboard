import React, { useState } from "react";
import "./Searchbox.css";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import SignalCellularAlt2BarTwoToneIcon from "@mui/icons-material/SignalCellularAlt2BarTwoTone";
import axios from "axios";

function Searchbox({ onPinGraph }) {
  const [showPopup, setShowPopup] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsColumns, setSearchResultsColumns] = useState([]);
  const [size, setSize] = useState(false);

  const toggleSize = () => {
    setSize(!size);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:8000/SQL/query", {
        chatQuery: query,
      });
      const resultData = response.data.data;
      const resultColumnData = response.data.column_names;

      console.log(resultData, "to ne check ");
      console.log(response.data.column_names, "results ");

      setSearchResults(resultData);
      setSearchResultsColumns(resultColumnData);
      
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePinGraph = () => {
    onPinGraph(searchResults);
  };

  const customHeaderNames = ["Student Name", "Marks", "Top Marks"];

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tableHeaderStyle = {
    background: "#f2f2f2",
    color:'black',
    padding: "8px",
    textAlign: "left",
  };

  const tableDataStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    color:'black'
  };
  return (
    <div className="cont1">
      <input
        type="text"
        placeholder="Recent reports on Hiring of Java Developers"
        value={query}
        onChange={handleInputChange}
        className="inp"
      />
      <SendIcon onClick={handleSearch} className="send-icon" />

      {showPopup && (
        <div className={size ? "pop-up" : "maximum-size "}>
          <div className="full-div">
            <div className="pop-up-L-icons">
              <OpenInFullOutlinedIcon
                onClick={toggleSize}
                className="pointer-icon"
              />
              <div>
                <SignalCellularAlt2BarTwoToneIcon />
              </div>
              <div
                style={{ height: "2rem", border: "1px solid #D0D0D0" }}
              ></div>
            </div>
            <div className="pop-up-R-icons">
              <div
                style={{ height: "2rem", border: "1px solid #D0D0D0" }}
              ></div>
              <p className="pointer-icon">Share</p>
              <ContentCopyIcon className="pointer-icon" />
              <PushPinOutlinedIcon
                className="pointer-icon"
                onClick={handlePinGraph}
              />
              <button className="pointer-icon" onClick={closePopup}>
                x
              </button>
            </div>
          </div>

          <div className="search-val">
            <h2>{query}</h2>
          </div>

          {/* <div className="search-va">
            <div className="user-info">
              <AccountCircleOutlinedIcon />
              <p>Created by</p>
            </div>
            <div className="user-info">
              <AccessTimeOutlinedIcon />
              <p>Created time</p>
            </div>
            <div className="user-info">
              <CalendarMonthOutlinedIcon />
              <p>Date</p>
            </div>
          </div> */}

          <div className="mygraph" style={{ marginTop: "30px" }}>
            {Array.isArray(searchResults) && searchResults.length > 0 ? (
              <table style={tableStyle} className="search-results-table">
                <thead>
                  <tr>
                    {searchResultsColumns.map((header) => (
                      <th key={header} style={tableHeaderStyle}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((result, index) => (
                    <tr key={index}>
                      {Object.values(result).map((value, innerIndex) => (
                        <td key={innerIndex} style={tableDataStyle}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No search results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbox;
