import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchData, getData } from "../apiConfig";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData("/jobs").then((res) => setJobs(res.jobs));
  }, []);

  const apply = async (jobId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    await getData("/apply", {
      userId: user.email,
      jobId,
    });

    alert("Applied!");
  };

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <button onClick={() => apply(job.id)}>Apply</button>
        </div>
      ))}
      <p>
        Dashboard? <a href="/dashboard">Go to Dashboard</a>
      </p>
    </div>
  );
}

export default Jobs;
