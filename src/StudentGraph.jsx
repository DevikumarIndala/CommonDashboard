import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class StudentGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [], // Student names
        datasets: [
          {
            label: "Math Marks",
            data: [], // Math marks
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Science Marks",
            data: [], // Science marks
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    };
  }

  componentDidMount() {
    // Sample student data (you can replace this with your data)
    const studentData = [
      { id: 1, name: "Alice", mathMarks: 85, scienceMarks: 90 },
      { id: 2, name: "Bob", mathMarks: 78, scienceMarks: 82 },
      { id: 3, name: "Charlie", mathMarks: 92, scienceMarks: 88 },
      // Add more student data
    ];

    // Extract data from studentData and update the state
    const studentNames = studentData.map((student) => student.name);
    const mathMarks = studentData.map((student) => student.mathMarks);
    const scienceMarks = studentData.map((student) => student.scienceMarks);

    this.setState({
      data: {
        ...this.state.data,
        labels: studentNames,
        datasets: [
          {
            ...this.state.data.datasets[0],
            data: mathMarks,
          },
          {
            ...this.state.data.datasets[1],
            data: scienceMarks,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.data}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default StudentGraph;
