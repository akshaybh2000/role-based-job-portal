// src/pages/admin/Profile.js

import { useState } from "react";
import Navbar from "../../components/Navbar";

function AdminProfile() {
  const [admin] = useState({
    name: "System Administrator",
    email: "admin@jobportal.com",
    phone: "+91 9876543210",
    role: "ADMIN",
    location: "Pune, Maharashtra",
    employeeId: "ADM001",
    department: "Administration",
    experience: "8 Years",
    joiningDate: "15 Jan 2018",
    permissions: "Full System Access",
    about:
      "Responsible for managing employers, job seekers, job postings, interviews and maintaining the overall Job Portal system.",
  });

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="container mt-2">
          <h1 className="mb-3">Admin Profile</h1>

          <div className="grid grid-3">
            {/* Left Card */}

            <div className="card text-center">
              <img
                src="https://ui-avatars.com/api/?name=System+Administrator&background=0f172a&color=fff&size=180"
                alt="Admin"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />

              <h2>{admin.name}</h2>

              <p>{admin.role}</p>

              <div className="mt-2">
                <span className="badge badge-success">Super Administrator</span>
              </div>

              <button
                className="btn btn-primary mt-3"
                style={{ width: "100%" }}
              >
                Edit Profile
              </button>
            </div>

            {/* Personal Information */}

            <div className="card" style={{ gridColumn: "span 2" }}>
              <h2 className="mb-2">Personal Information</h2>

              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Name</strong>
                    </td>
                    <td>{admin.name}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td>{admin.email}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Phone</strong>
                    </td>
                    <td>{admin.phone}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Employee ID</strong>
                    </td>
                    <td>{admin.employeeId}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Department</strong>
                    </td>
                    <td>{admin.department}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Location</strong>
                    </td>
                    <td>{admin.location}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Experience</strong>
                    </td>
                    <td>{admin.experience}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Joining Date</strong>
                    </td>
                    <td>{admin.joiningDate}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Permissions</strong>
                    </td>
                    <td>{admin.permissions}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* About */}

          <div className="card mt-3">
            <h2 className="mb-2">About</h2>

            <p>{admin.about}</p>
          </div>

          {/* Responsibilities */}

          <div className="card mt-3">
            <h2 className="mb-2">Responsibilities</h2>

            <div
              className="flex"
              style={{
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span className="badge badge-success">Manage Employers</span>

              <span className="badge badge-success">Manage Job Seekers</span>

              <span className="badge badge-success">Approve Jobs</span>

              <span className="badge badge-success">Manage Interviews</span>

              <span className="badge badge-success">User Management</span>

              <span className="badge badge-success">Reports</span>

              <span className="badge badge-success">Analytics</span>

              <span className="badge badge-success">System Settings</span>
            </div>
          </div>

          {/* System Statistics */}

          <div className="grid grid-4 mt-3">
            <div className="card text-center">
              <h3>Total Employers</h3>
              <h1>85</h1>
            </div>

            <div className="card text-center">
              <h3>Total Seekers</h3>
              <h1>520</h1>
            </div>

            <div className="card text-center">
              <h3>Jobs Posted</h3>
              <h1>245</h1>
            </div>

            <div className="card text-center">
              <h3>Interviews</h3>
              <h1>112</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
