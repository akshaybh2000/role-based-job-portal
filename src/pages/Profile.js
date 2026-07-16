import EmployerProfile from "./employer/Profile";
import SeekerProfile from "./seeker/Profile";

function Profile() {
  const role = sessionStorage.getItem("role");

  switch (role) {
    case "SEEKER":
      return <SeekerProfile />;

    case "EMPLOYER":
      return <EmployerProfile />;

    // case "ADMIN":
    //   return <AdminDashboard />;

    default:
      return <h2>Invalid Role</h2>;
  }
}

export default Profile;
