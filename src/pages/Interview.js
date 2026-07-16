import EmployerInterview from "./employer/Interview";
import SeekerInterview from "./seeker/Interview";

function Interview() {
  const role = sessionStorage.getItem("role");

  switch (role) {
    case "SEEKER":
      return <SeekerInterview />;

    case "EMPLOYER":
      return <EmployerInterview />;

    // case "ADMIN":
    //   return <AdminDashboard />;

    default:
      return <h2>Invalid Role</h2>;
  }
}

export default Interview;
