import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/login");
  };

  return (
    <div
      className="flex-center"
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-3">Job Portal</h1>

        <div className="grid grid-3">
          <div className="card text-center">
            <h2>Job Seeker</h2>

            <p className="mt-2 mb-2">Search and apply for jobs.</p>

            <button
              className="btn btn-primary"
              onClick={() => selectRole("SEEKER")}
            >
              Continue
            </button>
          </div>

          <div className="card text-center">
            <h2>Employer</h2>

            <p className="mt-2 mb-2">Post jobs and hire candidates.</p>

            <button
              className="btn btn-primary"
              onClick={() => selectRole("EMPLOYER")}
            >
              Continue
            </button>
          </div>

          <div className="card text-center">
            <h2>Admin</h2>

            <p className="mt-2 mb-2">Manage users and system.</p>

            <button
              className="btn btn-primary"
              onClick={() => selectRole("ADMIN")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
