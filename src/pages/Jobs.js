// src/pages/Jobs.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Jobs() {
  const navigate = useNavigate();

  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend React Developer",
      company: "Tech Solutions Pvt Ltd",
      location: "Pune",
      experience: "1-3 Years",
      salary: "₹5 - ₹8 LPA",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Java Full Stack Developer",
      company: "Infosys",
      location: "Bangalore",
      experience: "2-4 Years",
      salary: "₹6 - ₹10 LPA",
      type: "Full Time",
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "TCS",
      location: "Mumbai",
      experience: "Freshers",
      salary: "₹4 - ₹6 LPA",
      type: "Hybrid",
    },
    {
      id: 4,
      title: "Node.js Developer",
      company: "Wipro",
      location: "Hyderabad",
      experience: "3-5 Years",
      salary: "₹8 - ₹12 LPA",
      type: "Remote",
    },
    {
      id: 5,
      title: "UI/UX Developer",
      company: "Accenture",
      location: "Chennai",
      experience: "1-2 Years",
      salary: "₹5 - ₹7 LPA",
      type: "Full Time",
    },
  ]);

  const apply = (job) => {
    alert(`Application submitted for ${job.title}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="grid grid-2">
          {jobs.map((job) => (
            <div className="card" key={job.id}>
              <h2>{job.title}</h2>

              <p>
                <strong>Company :</strong> {job.company}
              </p>

              <p>
                <strong>Location :</strong> {job.location}
              </p>

              <p>
                <strong>Experience :</strong> {job.experience}
              </p>

              <p>
                <strong>Salary :</strong> {job.salary}
              </p>

              <p>
                <strong>Job Type :</strong> {job.type}
              </p>

              <div
                className="flex-between mt-2"
                style={{ alignItems: "center" }}
              >
                <button className="btn btn-primary" onClick={() => apply(job)}>
                  Apply Now
                </button>

                <span className="badge badge-success">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Jobs;
