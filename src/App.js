import "./App.css";
import NavBar from "./CoreComponents/NavBar/NavBar";
import StudentGraph from "./StudentGraph";

import Widgets from "./Pages/Dashboard/Widgets";
import DataTable from "./Pages/Dashboard/DataTable";
import Searchbox from "./Pages/Dashboard/Searchbox";
function App() {
  return (
    <div className="App">
      <div style={{ padding: "1rem 0 0 13rem" }}>
        <NavBar />
      </div>
      <div style={{ padding: "0 0 1rem 12rem" }}>
        <Widgets />
      </div>
     
      

      {/* <StudentGraph/> */}
    </div>
  );
}

export default App;
