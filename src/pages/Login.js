import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

export const title = {
  SEEKER: "Job Seeker Login",
  EMPLOYER: "Employer Login",
  ADMIN: "Admin Login",
};

const roleData = {
  SEEKER: {
    icon: "👨‍💼",
    color: "#2563eb",
    subtitle: "Login to search jobs, apply instantly and track interviews.",
    button: "Login as Seeker",
  },

  EMPLOYER: {
    icon: "🏢",
    color: "#16a34a",
    subtitle: "Login to post jobs, manage applicants and schedule interviews.",
    button: "Login as Employer",
  },

  ADMIN: {
    icon: "🛡️",
    color: "#f59e0b",
    subtitle: "Login to manage users and monitor the complete system.",
    button: "Login as Admin",
  },
};

function Login() {
  const role = sessionStorage.getItem("role") || "SEEKER";

  const navigate = useNavigate();

  const info = roleData[role];

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      sessionStorage.setItem("token", "demo-token");
      sessionStorage.setItem("role", role);

      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex-center"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <div
        className="card"
        style={{
          width: "430px",
          borderTop: `6px solid ${info.color}`,
          borderRadius: "16px",
          padding: "35px",
        }}
      >
        <div className="text-center">
          <img
            src="/IconJobPortal.png"
            alt="JobPortal"
            width="55"
            style={{ marginBottom: 10 }}
          />

          <div
            style={{
              fontSize: "55px",
              marginBottom: 10,
            }}
          >
            {info.icon}
          </div>

          <h2>{title[role]}</h2>

          <p
            style={{
              color: "#64748b",
              marginTop: 8,
              marginBottom: 25,
            }}
          >
            {info.subtitle}
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <input
              className="input"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn"
            style={{
              width: "100%",
              background: info.color,
              color: "#fff",
              fontSize: "16px",
              padding: "12px",
            }}
          >
            {loading ? "Please Wait..." : info.button}
          </button>
        </form>

        {role !== "ADMIN" && (
          <p
            className="text-center mt-3"
            style={{
              color: "#64748b",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: info.color,
                fontWeight: 600,
              }}
            >
              Signup
            </Link>
          </p>
        )}

        <div
          className="text-center mt-2"
          style={{
            fontSize: "14px",
            color: "#94a3b8",
          }}
        >
          Secure Login • JobPortal
        </div>
      </div>
    </div>
  );
}

export default Login;
