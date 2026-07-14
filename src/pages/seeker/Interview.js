// src/pages/Interview.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function Interview() {
  const [search, setSearch] = useState("");

  const [interviews] = useState([
    {
      id: 1,
      company: "Infosys",
      position: "React Developer",
      date: "20 Jul 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      company: "TCS",
      position: "Java Full Stack Developer",
      date: "22 Jul 2026",
      time: "2:30 PM",
      mode: "Offline",
      status: "Pending",
    },
    {
      id: 3,
      company: "Accenture",
      position: "Frontend Developer",
      date: "25 Jul 2026",
      time: "11:30 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 4,
      company: "Wipro",
      position: "Node.js Developer",
      date: "28 Jul 2026",
      time: "4:00 PM",
      mode: "Online",
      status: "Completed",
    },
    {
      id: 5,
      company: "Capgemini",
      position: "MERN Stack Developer",
      date: "30 Jul 2026",
      time: "9:30 AM",
      mode: "Offline",
      status: "Scheduled",
    },
  ]);

  const filtered = interviews.filter(
    (item) =>
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.position.toLowerCase().includes(search.toLowerCase()),
  );

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

      <div className="dashboard-page">
        <div className="container mt-2">
          {/* Header */}

          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>My Interviews</h1>
              <p>Track all your upcoming interviews.</p>
            </div>

            <input
              className="input"
              placeholder="Search Company or Position..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mt-3">
            <div className="card interview-stat">
              <h3>Total</h3>
              <h1>{interviews.length}</h1>
            </div>

            <div className="card interview-stat">
              <h3>Scheduled</h3>
              <h1>
                {interviews.filter((i) => i.status === "Scheduled").length}
              </h1>
            </div>

            <div className="card interview-stat">
              <h3>Pending</h3>
              <h1>{interviews.filter((i) => i.status === "Pending").length}</h1>
            </div>

            <div className="card interview-stat">
              <h3>Completed</h3>
              <h1>
                {interviews.filter((i) => i.status === "Completed").length}
              </h1>
            </div>
          </div>

          {/* Table */}

          <div className="card mt-3">
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
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.company}</td>

                    <td>{item.position}</td>

                    <td>{item.date}</td>

                    <td>{item.time}</td>

                    <td>{item.mode}</td>

                    <td>
                      <span className={getStatusClass(item.status)}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interview;
