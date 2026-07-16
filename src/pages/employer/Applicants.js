// src/pages/employer/Applicants.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function Applicants() {
  const [search, setSearch] = useState("");

  const [applicants] = useState([
    {
      id: 1,
      name: "Akshay Bharati",
      job: "React Developer",
      experience: "2 Years",
      location: "Pune",
      appliedDate: "15 Jul 2026",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      job: "Node.js Developer",
      experience: "3 Years",
      location: "Mumbai",
      appliedDate: "16 Jul 2026",
      status: "Pending",
    },
    {
      id: 3,
      name: "Priya Patil",
      job: "Java Full Stack",
      experience: "1 Year",
      location: "Pune",
      appliedDate: "16 Jul 2026",
      status: "Interview",
    },
    {
      id: 4,
      name: "Rohit Deshmukh",
      job: "Frontend Developer",
      experience: "4 Years",
      location: "Nagpur",
      appliedDate: "17 Jul 2026",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Sneha Joshi",
      job: "React Developer",
      experience: "2 Years",
      location: "Bangalore",
      appliedDate: "18 Jul 2026",
      status: "Pending",
    },
    {
      id: 6,
      name: "Vikas Yadav",
      job: "Python Developer",
      experience: "5 Years",
      location: "Delhi",
      appliedDate: "18 Jul 2026",
      status: "Shortlisted",
    },
  ]);

  const filtered = applicants.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.job.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Shortlisted":
        return "status status-active";

      case "Pending":
        return "status status-pending";

      case "Rejected":
        return "status status-rejected";

      case "Interview":
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
          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>Applicants</h1>
              <p>Manage all job applicants.</p>
            </div>

            <input
              className="input"
              style={{ width: "300px" }}
              placeholder="Search Candidate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total</h3>
              <h1>{applicants.length}</h1>
            </div>

            <div className="card">
              <h3>Shortlisted</h3>
              <h1>
                {
                  applicants.filter((item) => item.status === "Shortlisted")
                    .length
                }
              </h1>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <h1>
                {applicants.filter((item) => item.status === "Pending").length}
              </h1>
            </div>

            <div className="card">
              <h3>Rejected</h3>
              <h1>
                {applicants.filter((item) => item.status === "Rejected").length}
              </h1>
            </div>
          </div>

          {/* Applicants Table */}

          <div className="card">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Candidate</th>
                  <th>Applied Job</th>
                  <th>Experience</th>
                  <th>Location</th>
                  <th>Applied On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.name}</td>

                    <td>{item.job}</td>

                    <td>{item.experience}</td>

                    <td>{item.location}</td>

                    <td>{item.appliedDate}</td>

                    <td>
                      <span className={getStatusClass(item.status)}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <div className="table-actions">
                        <button className="btn btn-primary">View</button>

                        <button className="btn btn-edit">Schedule</button>

                        <button className="btn btn-danger">Reject</button>
                      </div>
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

export default Applicants;
