import { useState } from "react";
import Navbar from "../../components/Navbar";

function EmployerProfile() {
  const [user] = useState({
    name: "John Smith",
    email: "john.smith@abctech.com",
    phone: "+91 9876543210",
    role: sessionStorage.getItem("role") || "EMPLOYER",
    designation: "HR Manager",
    department: "Human Resources",
    company: "ABC Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra",
    experience: "6 Years",
    employeeId: "EMP1001",
    joiningDate: "15 Jan 2021",
    about:
      "Experienced HR Manager responsible for talent acquisition, recruitment, employee engagement and interview management.",
  });

  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1 className="mb-3">My Profile</h1>

        <div className="grid grid-3">
          {/* Left Card */}

          <div className="card text-center">
            <img
              src="https://ui-avatars.com/api/?name=John+Smith&background=2563eb&color=fff&size=150"
              alt="profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />

            <h2>{user.name}</h2>

            <p>{user.designation}</p>

            <div className="mt-2">
              <span className="badge badge-success">{user.role}</span>
            </div>

            <button className="btn btn-primary mt-3" style={{ width: "100%" }}>
              Edit Profile
            </button>
          </div>

          {/* Right Card */}

          <div className="card" style={{ gridColumn: "span 2" }}>
            <h2 className="mb-2">Personal Information</h2>

            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>{user.name}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Email</strong>
                  </td>
                  <td>{user.email}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Phone</strong>
                  </td>
                  <td>{user.phone}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Designation</strong>
                  </td>
                  <td>{user.designation}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Department</strong>
                  </td>
                  <td>{user.department}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Company</strong>
                  </td>
                  <td>{user.company}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Location</strong>
                  </td>
                  <td>{user.location}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Experience</strong>
                  </td>
                  <td>{user.experience}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Employee ID</strong>
                  </td>
                  <td>{user.employeeId}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Joining Date</strong>
                  </td>
                  <td>{user.joiningDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* About */}

        <div className="card mt-3">
          <h2 className="mb-2">About Me</h2>

          <p>{user.about}</p>
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
            <span className="badge badge-success">Recruitment</span>
            <span className="badge badge-success">Interview Scheduling</span>
            <span className="badge badge-success">Candidate Screening</span>
            <span className="badge badge-success">Job Posting</span>
            <span className="badge badge-success">Employee Onboarding</span>
            <span className="badge badge-success">Hiring</span>
            <span className="badge badge-success">HR Operations</span>
          </div>
        </div>

        {/* Account */}

        <div className="card mt-3">
          <div className="flex-between">
            <div>
              <h2>Account Status</h2>
              <p>Verified Employer Account</p>
            </div>

            <span className="badge badge-success">Active</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerProfile;
