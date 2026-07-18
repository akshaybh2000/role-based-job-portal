// src/pages/Signup.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import "../index.css";

const roleDetails = {
  SEEKER: {
    title: "Job Seeker Registration",
    icon: "👨‍💻",
    subtitle: "Create your account to find and apply for jobs.",
  },
  EMPLOYER: {
    title: "Employer Registration",
    icon: "🏢",
    subtitle: "Create your company account and hire top talent.",
  },
};

function Signup() {
  const navigate = useNavigate();

  const role = sessionStorage.getItem("role") || "SEEKER";

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.phone || !data.password) {
      alert("Please fill all required fields.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const signupData = {
      ...data,
      role,
    };

    console.log(signupData);

    /*
    try {
      await axios.post("http://localhost:5000/signup", signupData);
      alert("Registration Successful");
      navigate("/login");
    } catch {
      alert("Signup Failed");
    }
    */

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div
      className="flex-center"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >
      <div className="card" style={{ width: "500px" }}>
        <div className="text-center mb-3">
          <div style={{ fontSize: "55px" }}>{roleDetails[role].icon}</div>

          <h2>{roleDetails[role].title}</h2>

          <p>{roleDetails[role].subtitle}</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="mb-2">
            <input
              className="input"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email Address"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <input
              className="input"
              name="phone"
              placeholder="Mobile Number"
              value={data.phone}
              onChange={handleChange}
            />
          </div>

          {role === "EMPLOYER" && (
            <div className="mb-2">
              <input
                className="input"
                name="company"
                placeholder="Company Name"
                value={data.company}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="mb-2">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            type="submit"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
