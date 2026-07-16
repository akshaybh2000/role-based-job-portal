import { useState } from "react";
import Navbar from "../../components/Navbar";
import AddJob from "./AddJob";

function EmployerJobs() {
  const [showJobModal, setShowJobModal] = useState(false);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "React Developer",
      applicants: 18,
      location: "Pune",
      status: "Active",
    },
    {
      id: 2,
      title: "Node.js Developer",
      applicants: 9,
      location: "Mumbai",
      status: "Closed",
    },
    {
      id: 3,
      title: "Java Developer",
      applicants: 27,
      location: "Bangalore",
      status: "Active",
    },
  ]);

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <div className="container mt-2">
          <div className="dashboard-header flex-between mb-3">
            <div>
              <h1>My Posted Jobs</h1>
              <p>Manage all posted jobs.</p>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setShowJobModal(true)}
            >
              + Add Job
            </button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Applicants</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>

                  <td>{job.location}</td>

                  <td>{job.applicants}</td>

                  <td>
                    <span
                      className={
                        job.status === "Active"
                          ? "status status-active"
                          : "status status-inactive"
                      }
                    >
                      {job.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-primary">Applicants</button>

                    <button
                      className="btn btn-warning"
                      style={{ marginLeft: 10 }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: 10 }}
                      onClick={() => deleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddJob
        isOpen={showJobModal}
        onClose={() => setShowJobModal(false)}
        onAddJob={addJob}
      />
    </>
  );
}

export default EmployerJobs;
