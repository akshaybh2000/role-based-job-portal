import AdminDashboard from "./admin/Dashboard";
import EmployerDashboard from "./employer/Dashboard";
import SeekerDashboard from "./seeker/Dashboard";

function Dashboard() {
  const role = sessionStorage.getItem("role");

  switch (role) {
    case "SEEKER":
      return <SeekerDashboard />;

    case "EMPLOYER":
      return <EmployerDashboard />;

    case "ADMIN":
      return <AdminDashboard />;

    default:
      return <h2>Invalid Role</h2>;
  }
}

export default Dashboard;
