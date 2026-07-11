// src/pages/Dashboard.js

import { useNavigate } from "react-router-dom";
import { title } from "./Login";
import Navbar from "../components/Navbar";

function Dashboard() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Applied for Frontend Developer",
      time: "10 minutes ago",
    },
    {
      id: 2,
      title: "Profile Updated",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Resume Uploaded",
      time: "Yesterday",
    },
    {
      id: 4,
      title: "Password Changed",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "Account Created",
      time: "5 days ago",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {/* Header */}
        <div className="flex-between mb-3">
          <div>
            <h1>Dashboard</h1>
            <h1>Welcome {title[role]}</h1>
          </div>

          <button className="btn btn-primary" onClick={() => navigate("/jobs")}>
            Browse Jobs
          </button>
        </div>

        {/* Stats */}

        <div className="grid grid-4 mb-3">
          <div className="card">
            <h3>Total Jobs</h3>
            <h1>125</h1>
            <p>Available Jobs</p>
          </div>

          <div className="card">
            <h3>Applications</h3>
            <h1>18</h1>
            <p>Applied Jobs</p>
          </div>

          <div className="card">
            <h3>Interviews</h3>
            <h1>5</h1>
            <p>Scheduled</p>
          </div>

          <div className="card">
            <h3>Profile Score</h3>
            <h1>92%</h1>
            <p>Excellent</p>
          </div>
        </div>

        {/* Recent Activity */}

        <div className="card">
          <h2 className="mb-2">Recent Activity</h2>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Activity</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.title}</td>
                  <td>{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
