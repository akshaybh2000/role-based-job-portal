// src/pages/admin/Seekers.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function Seekers() {
  const [search, setSearch] = useState("");

  const [seekers] = useState([
    {
      id: 1,
      name: "Akshay Bharati",
      email: "akshay@gmail.com",
      phone: "+91 9876543210",
      location: "Pune",
      experience: "2 Years",
      skills: "React, Node.js",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543211",
      location: "Mumbai",
      experience: "3 Years",
      skills: "Java, Spring Boot",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Patil",
      email: "priya@gmail.com",
      phone: "+91 9876543212",
      location: "Pune",
      experience: "1 Year",
      skills: "Angular, TypeScript",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Vikas Yadav",
      email: "vikas@gmail.com",
      phone: "+91 9876543213",
      location: "Delhi",
      experience: "4 Years",
      skills: "Python, Django",
      status: "Active",
    },
    {
      id: 5,
      name: "Sneha Joshi",
      email: "sneha@gmail.com",
      phone: "+91 9876543214",
      location: "Nagpur",
      experience: "2 Years",
      skills: "MERN Stack",
      status: "Blocked",
    },
    {
      id: 6,
      name: "Rohit Deshmukh",
      email: "rohit@gmail.com",
      phone: "+91 9876543215",
      location: "Nashik",
      experience: "Fresher",
      skills: "React",
      status: "Active",
    },
  ]);

  const filtered = seekers.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status status-active";

      case "Inactive":
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
              <h1>Job Seekers</h1>
              <p>Manage all registered job seekers.</p>
            </div>

            <input
              className="input"
              placeholder="Search seeker..."
              style={{ width: "300px" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Stats */}

          <div className="grid grid-4 mb-3">
            <div className="card">
              <h3>Total Seekers</h3>
              <h1>{seekers.length}</h1>
            </div>

            <div className="card">
              <h3>Active</h3>
              <h1>{seekers.filter((s) => s.status === "Active").length}</h1>
            </div>

            <div className="card">
              <h3>Inactive</h3>
              <h1>{seekers.filter((s) => s.status === "Inactive").length}</h1>
            </div>

            <div className="card">
              <h3>Blocked</h3>
              <h1>{seekers.filter((s) => s.status === "Blocked").length}</h1>
            </div>
          </div>

          {/* Table */}

          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Location</th>
                  <th>Experience</th>
                  <th>Skills</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.location}</td>
                    <td>{item.experience}</td>
                    <td>{item.skills}</td>

                    <td>
                      <span className={getStatusClass(item.status)}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-primary">View</button>

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

export default Seekers;
