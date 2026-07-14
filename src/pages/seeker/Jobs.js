import { useState } from "react";
import Navbar from "../../components/Navbar";

function SeekerJobs() {
  const [search, setSearch] = useState("");

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

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()),
  );

  const apply = (job) => {
    alert(`Application submitted for ${job.title}`);
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="container mt-2">
          {/* Header */}

          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>Available Jobs</h1>
              <p>{filteredJobs.length} jobs available</p>
            </div>

            <input
              className="input"
              placeholder="Search by Job Title or Company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}

          <div className="job-filter">
            <button className="btn btn-primary">All</button>

            <button className="btn">Full Time</button>

            <button className="btn">Remote</button>

            <button className="btn">Hybrid</button>
          </div>

          {/* Job Cards */}

          <div className="grid grid-2 mt-3">
            {filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="flex-between">
                  <div>
                    <h2>{job.title}</h2>
                    <h4>{job.company}</h4>
                  </div>

                  <span className="badge badge-success">{job.type}</span>
                </div>

                <div className="job-info mt-2">
                  <p>📍 {job.location}</p>

                  <p>💼 {job.experience}</p>

                  <p>💰 {job.salary}</p>
                </div>

                <div className="flex-between mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => apply(job)}
                  >
                    Apply Now
                  </button>

                  <button className="btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeekerJobs;
