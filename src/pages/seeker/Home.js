import { useNavigate } from "react-router-dom";
import IconJobPortal from "../../../src/IconJobPortal.png";

function Home() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    sessionStorage.setItem("role", role);
    navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="container">
          {/* Hero */}
          <div className="home-header">
            <div className="home-logo">
              <img src={IconJobPortal} alt="Job Portal Logo" />
              <h1>JobPortal</h1>
            </div>

            <p>
              One Platform for Job Seekers, Employers and Administrators.
              <br />
              Find Jobs • Hire Talent • Manage Recruitment
            </p>
          </div>

          {/* Cards */}

          <div className="grid grid-3 home-cards">
            <div className="card role-card seeker">
              <div className="role-icon">👨‍💼</div>

              <h2>Job Seeker</h2>

              <p>
                Search thousands of jobs, apply instantly and track interviews.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => selectRole("SEEKER")}
              >
                Continue as Seeker
              </button>
            </div>

            <div className="card role-card employer">
              <div className="role-icon">🏢</div>

              <h2>Employer</h2>

              <p>
                Post jobs, manage applicants and schedule interviews easily.
              </p>

              <button
                className="btn btn-success"
                onClick={() => selectRole("EMPLOYER")}
              >
                Continue as Employer
              </button>
            </div>

            <div className="card role-card admin">
              <div className="role-icon">🛡️</div>

              <h2>Admin</h2>

              <p>Manage users, monitor activities and control the platform.</p>

              <button
                className="btn btn-warning"
                onClick={() => selectRole("ADMIN")}
              >
                Continue as Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
