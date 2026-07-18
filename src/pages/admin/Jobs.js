// src/pages/admin/Jobs.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function Jobs() {
  const [search, setSearch] = useState("");

  const [jobs] = useState([
    {
      id: 1,
      title: "React Developer",
      company: "Infosys",
      location: "Pune",
      type: "Full Time",
      salary: "₹6 - ₹9 LPA",
      applicants: 25,
      status: "Active",
    },
    {
      id: 2,
      title: "Java Full Stack Developer",
      company: "TCS",
      location: "Mumbai",
      type: "Hybrid",
      salary: "₹8 - ₹12 LPA",
      applicants: 18,
      status: "Pending",
    },
    {
      id: 3,
      title: "Node.js Developer",
      company: "Wipro",
      location: "Hyderabad",
      type: "Remote",
      salary: "₹7 - ₹10 LPA",
      applicants: 12,
      status: "Active",
    },
    {
      id: 4,
      title: "Python Developer",
      company: "Accenture",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹9 - ₹13 LPA",
      applicants: 30,
      status: "Rejected",
    },
    {
      id: 5,
      title: "MERN Stack Developer",
      company: "Capgemini",
      location: "Pune",
      type: "Hybrid",
      salary: "₹6 - ₹8 LPA",
      applicants: 20,
      status: "Pending",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Tech Mahindra",
      location: "Noida",
      type: "Remote",
      salary: "₹5 - ₹7 LPA",
      applicants: 15,
      status: "Active",
    },
  ]);

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status status-active";

      case "Pending":
        return "status status-pending";

      case "Rejected":
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
              <h1>Jobs Management</h1>
              <p>Manage all jobs posted by employers.</p>
            </div>

            <input
              className="input"
              style={{ width: "300px" }}
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total Jobs</h3>
              <h1>{jobs.length}</h1>
            </div>

            <div className="card">
              <h3>Active</h3>
              <h1>{jobs.filter((j) => j.status === "Active").length}</h1>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <h1>{jobs.filter((j) => j.status === "Pending").length}</h1>
            </div>

            <div className="card">
              <h3>Rejected</h3>
              <h1>{jobs.filter((j) => j.status === "Rejected").length}</h1>
            </div>
          </div>

          {/* Jobs Table */}

          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Salary</th>
                  <th>Applicants</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.type}</td>
                    <td>{job.salary}</td>
                    <td>{job.applicants}</td>

                    <td>
                      <span className={getStatusClass(job.status)}>
                        {job.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-primary">View</button>

                      {job.status === "Pending" && (
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
                        Delete
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

export default Jobs;
