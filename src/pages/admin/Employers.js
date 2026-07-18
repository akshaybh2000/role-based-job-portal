// src/pages/admin/Employers.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function Employers() {
  const [search, setSearch] = useState("");

  const [employers] = useState([
    {
      id: 1,
      company: "ABC Technologies",
      owner: "John Smith",
      email: "hr@abctech.com",
      phone: "+91 9876543210",
      location: "Pune",
      jobs: 12,
      status: "Verified",
    },
    {
      id: 2,
      company: "Infosys",
      owner: "Rohit Sharma",
      email: "careers@infosys.com",
      phone: "+91 9876543211",
      location: "Bangalore",
      jobs: 35,
      status: "Verified",
    },
    {
      id: 3,
      company: "TCS",
      owner: "Anjali Patil",
      email: "jobs@tcs.com",
      phone: "+91 9876543212",
      location: "Mumbai",
      jobs: 24,
      status: "Pending",
    },
    {
      id: 4,
      company: "Accenture",
      owner: "Amit Kumar",
      email: "hr@accenture.com",
      phone: "+91 9876543213",
      location: "Hyderabad",
      jobs: 18,
      status: "Verified",
    },
    {
      id: 5,
      company: "Capgemini",
      owner: "Neha Gupta",
      email: "jobs@capgemini.com",
      phone: "+91 9876543214",
      location: "Pune",
      jobs: 15,
      status: "Blocked",
    },
    {
      id: 6,
      company: "Wipro",
      owner: "Raj Mehta",
      email: "hr@wipro.com",
      phone: "+91 9876543215",
      location: "Chennai",
      jobs: 20,
      status: "Verified",
    },
  ]);

  const filtered = employers.filter(
    (item) =>
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.owner.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Verified":
        return "status status-active";

      case "Pending":
        return "status status-pending";

      case "Blocked":
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
              <h1>Employers</h1>
              <p>Manage all registered employers.</p>
            </div>

            <input
              className="input"
              style={{ width: "300px" }}
              placeholder="Search employer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total Employers</h3>
              <h1>{employers.length}</h1>
            </div>

            <div className="card">
              <h3>Verified</h3>
              <h1>{employers.filter((e) => e.status === "Verified").length}</h1>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <h1>{employers.filter((e) => e.status === "Pending").length}</h1>
            </div>

            <div className="card">
              <h3>Blocked</h3>
              <h1>{employers.filter((e) => e.status === "Blocked").length}</h1>
            </div>
          </div>

          {/* Table */}

          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company</th>
                  <th>Owner</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Jobs</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.company}</td>
                    <td>{item.owner}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.location}</td>
                    <td>{item.jobs}</td>

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
                          Verify
                        </button>
                      )}

                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "8px" }}
                      >
                        Block
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

export default Employers;
