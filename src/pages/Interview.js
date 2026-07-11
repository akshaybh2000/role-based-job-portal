// src/pages/Interview.js

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Interview() {
  //   const navigate = useNavigate();

  const [interviews] = useState([
    {
      id: 1,
      company: "Infosys",
      position: "React Developer",
      date: "20 July 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      company: "TCS",
      position: "Java Full Stack Developer",
      date: "22 July 2026",
      time: "2:30 PM",
      mode: "Offline",
      status: "Pending",
    },
    {
      id: 3,
      company: "Accenture",
      position: "Frontend Developer",
      date: "25 July 2026",
      time: "11:30 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 4,
      company: "Wipro",
      position: "Node.js Developer",
      date: "28 July 2026",
      time: "4:00 PM",
      mode: "Online",
      status: "Completed",
    },
    {
      id: 5,
      company: "Capgemini",
      position: "MERN Stack Developer",
      date: "30 July 2026",
      time: "9:30 AM",
      mode: "Offline",
      status: "Scheduled",
    },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Scheduled":
        return "status status-active";
      case "Pending":
        return "status status-pending";
      case "Completed":
        return "status status-inactive";
      default:
        return "status";
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {" "}
        <div className="flex-between mb-3">
          <h1>My Interviews</h1>
        </div>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Position</th>
                <th>Date</th>
                <th>Time</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {interviews.map((interview) => (
                <tr key={interview.id}>
                  <td>{interview.id}</td>
                  <td>{interview.company}</td>
                  <td>{interview.position}</td>
                  <td>{interview.date}</td>
                  <td>{interview.time}</td>
                  <td>{interview.mode}</td>
                  <td>
                    <span className={getStatusClass(interview.status)}>
                      {interview.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Interview;
