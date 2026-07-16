import SeekerJobs from "./seeker/Jobs";
import EmployerJobs from "./employer/Jobs";

function Jobs() {
  const role = sessionStorage.getItem("role");

  if (role === "EMPLOYER") {
    return <EmployerJobs />;
  }

  return <SeekerJobs />;
}

export default Jobs;
