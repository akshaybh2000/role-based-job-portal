// src/pages/admin/Interviews.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function AdminInterviews() {
  const [search, setSearch] = useState("");

  const [interviews] = useState([
    {
      id: 1,
      candidate: "Akshay Bharati",
      company: "Infosys",
      job: "React Developer",
      interviewer: "Rahul Sharma",
      date: "20 Jul 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Priya Patil",
      company: "TCS",
      job: "Java Full Stack",
      interviewer: "Neha Gupta",
      date: "22 Jul 2026",
      time: "02:00 PM",
      mode: "Offline",
      status: "Completed",
    },
    {
      id: 3,
      candidate: "Rohit Sharma",
      company: "Accenture",
      job: "Node.js Developer",
      interviewer: "Amit Kumar",
      date: "24 Jul 2026",
      time: "11:30 AM",
      mode: "Online",
      status: "Pending",
    },
    {
      id: 4,
      candidate: "Sneha Joshi",
      company: "Wipro",
      job: "Frontend Developer",
      interviewer: "John Smith",
      date: "25 Jul 2026",
      time: "03:30 PM",
      mode: "Online",
      status: "Cancelled",
    },
    {
      id: 5,
      candidate: "Anjali Patil",
      company: "Capgemini",
      job: "Python Developer",
      interviewer: "Raj Verma",
      date: "27 Jul 2026",
      time: "09:30 AM",
      mode: "Offline",
      status: "Scheduled",
    },
    {
      id: 6,
      candidate: "Vikas Yadav",
      company: "Tech Mahindra",
      job: "UI/UX Designer",
      interviewer: "Pooja Singh",
      date: "29 Jul 2026",
      time: "01:00 PM",
      mode: "Online",
      status: "Completed",
    },
  ]);

  const filtered = interviews.filter(
    (item) =>
      item.candidate.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.job.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Scheduled":
        return "status status-active";

      case "Pending":
        return "status status-pending";

      case "Completed":
        return "status status-inactive";

      case "Cancelled":
        return "status status-rejected";

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
              <h1>Interview Management</h1>
              <p>Monitor all scheduled interviews.</p>
            </div>

            <input
              className="input"
              style={{ width: "320px" }}
              placeholder="Search candidate, company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total Interviews</h3>
              <h1>{interviews.length}</h1>
            </div>

            <div className="card">
              <h3>Scheduled</h3>
              <h1>
                {interviews.filter((i) => i.status === "Scheduled").length}
              </h1>
            </div>

            <div className="card">
              <h3>Completed</h3>
              <h1>
                {interviews.filter((i) => i.status === "Completed").length}
              </h1>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <h1>{interviews.filter((i) => i.status === "Pending").length}</h1>
            </div>
          </div>

          {/* Table */}

          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Candidate</th>
                  <th>Company</th>
                  <th>Job</th>
                  <th>Interviewer</th>
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
                    <td>{item.candidate}</td>
                    <td>{item.company}</td>
                    <td>{item.job}</td>
                    <td>{item.interviewer}</td>
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

                      {item.status === "Pending" && (
                        <button
                          className="btn btn-success"
                          style={{ marginLeft: "8px" }}
                        >
                          Approve
                        </button>
                      )}

                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "8px" }}
                      >
                        Cancel
                      </button>
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

export default AdminInterviews;
