import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import axios from "axios";

export default function DataTable() {
  const [columns] = useState([
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Student Name", width: 130 },
    { field: "marks", headerName: "Marks", width: 130 },
    { field: "topmarks", headerName: "Top Marks", width: 130 },
  ]);

  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState(""); // State to store user's query

  const handleSearch = async () => {
    const apiUrl = `http://localhost:8000/SQL/${query}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div style={{ height: 300, width: "90%" }}>
      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Execute Query</button>

      <DataGrid rows={rows} columns={columns} pageSize={5} pagination />
    </div>
  );
}
