// src/pages/employer/Dashboard.js

import { useNavigate } from "react-router-dom";
import { title } from "../Login";
import Navbar from "../../components/Navbar";

function EmployerDashboard() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Posted a new React Developer job",
      time: "10 minutes ago",
    },
    {
      id: 2,
      title: "12 new applications received",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Interview scheduled with Rahul Sharma",
      time: "Yesterday",
    },
    {
      id: 4,
      title: "Job 'Node.js Developer' updated",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "Company profile updated",
      time: "5 days ago",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="container mt-2">
          {/* Header */}

          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>Employer Dashboard</h1>
              <p>Welcome back, {title[role]} 👋</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/jobs")}
            >
              + Post New Job
            </button>
          </div>

          {/* Statistics */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Active Jobs</h3>
              <h1>18</h1>
              <p>Currently Live</p>
            </div>

            <div className="card">
              <h3>Total Applications</h3>
              <h1>248</h1>
              <p>Received</p>
            </div>

            <div className="card">
              <h3>Interviews</h3>
              <h1>27</h1>
              <p>Scheduled</p>
            </div>

            <div className="card">
              <h3>Selected</h3>
              <h1>9</h1>
              <p>Candidates Hired</p>
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

          {/* Quick Actions */}

          <div className="grid grid-3 mt-3">
            <div className="card text-center">
              <h3>📢 Post Job</h3>
              <p>Create a new job opening.</p>

              <button
                className="btn btn-primary mt-2"
                onClick={() => navigate("/jobs")}
              >
                Post Job
              </button>
            </div>

            <div className="card text-center">
              <h3>👥 View Applicants</h3>
              <p>Review applications from candidates.</p>

              <button className="btn btn-primary mt-2">Applicants</button>
            </div>

            <div className="card text-center">
              <h3>📅 Interviews</h3>
              <p>Manage interview schedules.</p>

              <button
                className="btn btn-primary mt-2"
                onClick={() => navigate("/interview")}
              >
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerDashboard;
