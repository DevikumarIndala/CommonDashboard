import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getApiCall } from "../../Store/dashboard/dashboard.action";
import { BarChartComponent } from "./BarChartComponent";
import Searchbox from "./Searchbox";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { useRef } from "react";

function Widgets() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.dashboardReducer?.data);
  const [pinnedGraph, setPinnedGraph] = React.useState(null);
  const [chart, setChart] = React.useState(null);
  const prevPinnedGraph = useRef(pinnedGraph);

  const pinGraph = (graphData) => {
    setPinnedGraph(graphData);
  };

  if (pinnedGraph !== null) {
    console.log(pinnedGraph.length, "hello");
  }

  React.useEffect(() => {
    const apiCallAction = getApiCall();
    dispatch(apiCallAction);
  }, []);

  const generateMonthLabels = (count) => {
    const currentDate = new Date();
    const monthLabels = [];

    for (let i = 0; i < count; i++) {
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const monthLabel = new Intl.DateTimeFormat("en-US", {
        month: "short",
      }).format(currentDate);
      monthLabels.push(`${monthLabel} ${year}`);

      // Move to the previous month
      currentDate.setMonth(month - 1);
    }

    // Reverse the array to have the labels in ascending order
    return monthLabels.reverse();
  };

  useEffect(() => {
    if (pinnedGraph !== null) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const labels = generateMonthLabels(pinnedGraph.length);
      const data = pinnedGraph.map((product) => product.price);

      if (prevPinnedGraph.current !== pinnedGraph) {
        // Destroy the previous chart instance before creating a new one
        if (chart) {
          chart.destroy();
        }

        const newChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Product Prices",
                data: data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
              },
            ],
          },
        });

        setChart(newChart);
      }

      prevPinnedGraph.current = pinnedGraph;
    }
  }, [pinnedGraph, chart]);

  console.log("API Data:", apiData);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
      <Card sx={{ width: 160, height: 160, background: "#DAFBFF", m: 2 }}>
        <CardContent>
          <p style={{ fontSize: "12px" }}>Live Chat</p>
          <h1 style={{ textAlign: "center" }}>10790</h1>
        </CardContent>
      </Card>
      <Card sx={{ width: 160, height: 160, background: "#DAE2FF", m: 2 }}>
        <CardContent>
          <p style={{ fontSize: "12px" }}>Completed Chat</p>
          <h1 style={{ textAlign: "center" }}>7900</h1>
        </CardContent>
      </Card>
      <Card sx={{ width: 160, height: 160, background: "#DAFFDE", m: 2 }}>
        <CardContent>Performance</CardContent>
      </Card>

      <div
        style={{
          width: 160,
          height: 160,
          background: "#FFF5DA",
          m: 2,
          marginTop: "1rem",
          padding: "1px",
        }}
      >
        <div>
          <p style={{ fontSize: "12px", color: "#001102", marginTop: "2px" }}>
            Overall
          </p>
          <p style={{ fontSize: "12px", color: "#001102", marginTop: "1px" }}>
            Performance
          </p>
        </div>
        <div
          style={{
            width: 160,
            height: 160,
            marginTop: "-5rem",
            marginLeft: "-1rem",
          }}
        >
          <BarChartComponent />
        </div>
      </div>

      <Card sx={{ width: 320, height: 160, background: "#FFDAFB", m: 2 }}>
        <CardContent>
          <p style={{ fontSize: "12px" }}>Case Solving Rate</p>
        </CardContent>
        <CardContent
          style={{ display: "flex", gap: "10px", marginTop: "-2rem" }}
        >
          <CardContent sx={{ width: 160, height: 160 }}>
            <h3 style={{ fontSize: "1rem" }}>Closing Time</h3>
            <h3 style={{ fontSize: "1rem", marginTop: "-.3rem" }}>2 Days</h3>
          </CardContent>
          <CardContent sx={{ width: 160, height: 160 }}>
            <h3 style={{ fontSize: "1rem" }}>Total Saving</h3>
            <h3 style={{ fontSize: "1rem", marginTop: "-.3rem" }}>₹ 650</h3>
          </CardContent>
        </CardContent>
      </Card>

      <div className="oneGraph">
        {pinnedGraph && <canvas id="myChart"></canvas>}
      </div>

      <Searchbox onPinGraph={pinGraph} />
    </Box>
  );
}

export default Widgets;
